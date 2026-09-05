from .models import *
from sqlalchemy import select, func, and_
from sqlalchemy.ext.asyncio import AsyncSession
from .schemas import *
from sqlalchemy.orm import selectinload
from httpx import AsyncClient
from .exceptions import *
from app.core.utils import create_slug
from typing import Literal
from app.categories.exceptions import CategoryNotFoundException, SubCategoryNotFoundException
from app.core.exceptions.exceptions import PageNotFoundException


async def _get_product_with_relations(db: AsyncSession, product_id: int) -> Product | None:
    """
    Get product with relationships
    """
    
    return (
        await db.execute(
            select(Product)
            .where(Product.id == product_id, Product.is_active == True)
            .options(
                selectinload(Product.category),
                selectinload(Product.sub_category),
                selectinload(Product.variants),
            )
        )
    ).scalars().one_or_none()

def _is_product_active(product: Product) -> bool:
    return (
        product.is_active
        and product.category is not None
        and product.category.is_active
        and product.sub_category is not None
        and product.sub_category.is_active
    )

def _validate_product(products: list[Product]) -> list[Product]:
    """
    Check if all products with relationships are active
    """
    
    return [product for product in products if _is_product_active(product)]
        
    

async def get_products_service(
    db: AsyncSession, 
    page: int, 
    limit: int,
    new_arrivals: bool | None = None,
    category_id: int | None = None,
    color_name: str | None = None,
    size: str | None = None,
    target_key: TargetKey | None = None,
    sort: Literal[
        "price_asc", 
        "price_desc", 
        "created_at_asc", 
        "created_at_desc"
        ] | None = None
    
) -> PaginatedProductResponse:
    """
    Get paginated products with relationships, eventually filtered by query params
    """
    
    # query params filters
    conditions = [Product.is_active == True]

    if new_arrivals is not None:
        conditions.append(Product.new_arrivals == new_arrivals)
    if category_id is not None:
        conditions.append(Product.category_id == category_id)

    variant_conditions = []

    if color_name is not None:
        variant_conditions.append(ProductVariant.color_name == color_name.capitalize())
    if size is not None:
        variant_conditions.append(ProductVariant.size == size.upper())
    if target_key is not None:
        variant_conditions.append(ProductVariant.target_key == target_key)

    if variant_conditions:
        conditions.append(Product.variants.any(and_(*variant_conditions)))

    # sorting options
    SORT_OPTIONS = {
        "price_asc": Product.price_cents.asc(),
        "price_desc": Product.price_cents.desc(),
        "created_at_asc": Product.created_at.asc(),
        "created_at_desc": Product.created_at.desc(),
    }
    
    order_columns = [SORT_OPTIONS[sort]] if sort else [Product.created_at.desc(), Product.id.desc()]

    # pagination
    total_items = (
        await db.execute(
            select(func.count())
            .select_from(Product)
            .where(and_(*conditions))
        )
    ).scalar_one()
    
    total_pages = (total_items + limit - 1) // limit
    
    if 0 < total_pages < page:
        raise PageNotFoundException(f"Page {page} not found")
    
    
    # query to extract products with relationships
    products = (
        await db.execute(
            select(Product)
            .where(and_(*conditions))
            .order_by(*order_columns)
            .offset((page - 1) * limit)
            .limit(limit)
            .options(
                selectinload(Product.category),
                selectinload(Product.sub_category),
                selectinload(Product.variants),
            )
        )
    ).scalars().all()
    
    
    return PaginatedProductResponse(
        total_items=total_items,
        total_pages=total_pages,
        items_per_page=limit,
        prev_page=page - 1 if page > 1 else None,
        current_page=page,
        next_page=page + 1 if page < total_pages else None,
        items=[ProductSchema.model_validate(product) for product in _validate_product(products)]
    )

        
    
async def get_product_details_service(db: AsyncSession, product_id: int) -> ProductSchema:
    """
    Get product details with relationships
    """
    
    product = await _get_product_with_relations(db, product_id)
    
    # 404
    if product is None or not _validate_product([product]):
        raise ProductNotFoundException(f"Product with id {product_id} not found")
    
    return ProductSchema.model_validate(product)


async def create_product_service(db: AsyncSession, payload: ProductCreateRequestSchema) -> ProductSchema:
    """
    Insert a new product with its variant
    """
    
    # image validation
    async with AsyncClient() as client:
        response = await client.head(payload.image_url)
        if response.status_code != 200:
            raise InvalidImageURLException(f"Image at url: {payload.image_url} is unreachable")
    
    # check if category and subcategory exist
    existing_category = (
        await db.execute(
            select(Category).where(Category.id == payload.category_id)
        )
    ).scalar_one_or_none()
    
    if existing_category is None or existing_category.is_active == False:
        raise CategoryNotFoundException(f"Category with id {payload.category_id} not found")
    
    existing_sub_category = (
        await db.execute(
            select(SubCategory).where(SubCategory.id == payload.sub_category_id)
        )
    ).scalar_one_or_none()
    
    if existing_sub_category is None or existing_sub_category.is_active == False:
        raise SubCategoryNotFoundException(f"SubCategory with id {payload.sub_category_id} not found")
    
    # create slug and check if it's unique
    product_slug = create_slug(payload.title, payload.variant.target_key)
    
    existing_product_slug = (
        await db.execute(
            select(Product).where(Product.slug == product_slug)
        )
    ).scalar_one_or_none()
    
    if existing_product_slug is not None:
        raise ProductSlugAlreadyExistsException(f"Slug {product_slug} already exists")
    
    # create product
    new_product = Product(
        title=payload.title,
        subtitle=payload.subtitle,
        description=payload.description,
        slug=product_slug,
        price_cents=payload.price_cents,
        sale_percent=payload.sale_percent if payload.sale_percent is not None else 0,
        new_arrivals=payload.new_arrivals if payload.new_arrivals is not None else False,
        image_url=payload.image_url,
        category_id=payload.category_id,
        sub_category_id=payload.sub_category_id,
    )
    
    db.add(new_product)
    await db.flush()
    
    # create variant
    new_variant = ProductVariant(
        product_id=new_product.id,
        size=payload.variant.size,
        color_name=payload.variant.color_name,
        color_hex=payload.variant.color_hex,
        target_key=payload.variant.target_key,
        stock=payload.variant.stock
    )
    
    db.add(new_variant)
    await db.commit()
    
    product = await _get_product_with_relations(db, new_product.id)
    
    return ProductSchema.model_validate(product)
    
    
async def update_product_service(
    db: AsyncSession, 
    product_id: int, 
    payload: ProductUpdateRequestSchema
) -> ProductSchema:
    """
    Update a product and its variant
    """
    
    product = await _get_product_with_relations(db, product_id)
    
    # 404
    if product is None or not _validate_product([product]):
        raise ProductNotFoundException(f"Product with id {product_id} not found")
    
    update_data = payload.model_dump(exclude_unset=True)

    variant_data = update_data.pop("variant", None)
    
    if payload.title and payload.variant.target_key:
        product_slug = create_slug(payload.title, payload.variant.target_key)

        existing_product_slug = (
            await db.execute(
                select(Product).where(Product.slug == product_slug)
            )
        ).scalar_one_or_none()

        if existing_product_slug is not None and existing_product_slug.id != product_id:
            raise ProductSlugAlreadyExistsException(f"Slug {product_slug} already exists")
    
    for key, value in update_data.items():
        setattr(product, key, value)

    await db.flush()
    
    if variant_data:
        for key, value in variant_data.items():
            setattr(product.variants.get(payload.variant.id, None), key, value)
    
    await db.commit()
    await db.refresh(product)
    
    return ProductSchema.model_validate(product)
        

async def delete_product_service(db: AsyncSession, product_id: int) -> None:
    """
    Delete a product and its variant
    """
    
    product = (
        await db.execute(
            select(Product).where(Product.id == product_id)
        )
    ).scalar_one_or_none()
    
    if product is None:
        raise ProductNotFoundException(f"Product with id {product_id} not found")
    
    db.delete(product)
    await db.commit()
    
    
async def create_variant_service(db: AsyncSession, payload: ProductVariantCreateRequestSchema) -> ProductSchema:
    """
    Create a new product variant
    """
    
    product = await _get_product_with_relations(db, payload.product_id)
    
    # 404
    if product is None or not _validate_product([product]):
        raise ProductNotFoundException(f"Product with id {payload.product_id} not found")
    
    new_variant = ProductVariant(
        product_id=product.id,
        size=payload.size,
        color_name=payload.color_name,
        color_hex=payload.color_hex,
        target_key=payload.target_key,
        stock=payload.stock
    )
    
    db.add(new_variant)
    await db.commit()
    
    return ProductSchema.model_validate(product)


async def delete_variant_service(db: AsyncSession, variant_id: int) -> None:
    """
    Delete a product variant
    """
    
    variant = (
        await db.execute(
            select(ProductVariant).where(ProductVariant.id == variant_id)
        )
    ).scalar_one_or_none()
    
    if variant is None:
        raise ProductVariantNotFoundException(f"Product variant with id {variant_id} not found")
    
    await db.delete(variant)
    await db.commit()