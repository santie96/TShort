from .models import *
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from .schemas import ProductSchema, ProductCreateRequestSchema
from sqlalchemy.orm import selectinload
from .exceptions import *
from httpx import AsyncClient
from .utils import create_product_slug


async def _get_product_with_relations(db: AsyncSession, product_id: int) -> Product | None:
    """
    Get product with relationships
    """
    
    return (
        await db.execute(
            select(Product)
            .where(Product.id == product_id)
            .options(
                selectinload(Product.category),
                selectinload(Product.sub_category),
                selectinload(Product.variants),
            )
        )
    ).scalars().one_or_none()

async def get_all_products_service(db: AsyncSession) -> list[ProductSchema]:
    """
    Get all products
    """
    
    products = (
        await db.execute(
            select(Product)
            .options(
                selectinload(Product.category),
                selectinload(Product.sub_category),
                selectinload(Product.variants),
            )
        )
    ).scalars().all()
    
    return [ProductSchema.model_validate(product) for product in products]


async def get_product_details_service(db: AsyncSession, product_id: int) -> ProductSchema:
    """
    Get product details with relationships
    """
    
    product = await _get_product_with_relations(db, product_id)
    
    # 404
    if product is None:
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
    
    if existing_category is None:
        raise CategoryNotFoundException(f"Category with id {payload.category_id} not found")
    
    existing_sub_category = (
        await db.execute(
            select(SubCategory).where(SubCategory.id == payload.sub_category_id)
        )
    ).scalar_one_or_none()
    
    if existing_sub_category is None:
        raise SubCategoryNotFoundException(f"SubCategory with id {payload.sub_category_id} not found")
    
    # create slug and check if it's unique
    product_slug = create_product_slug(payload.title, payload.variant.target_key)
    
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
    
    