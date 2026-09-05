from fastapi import APIRouter, Depends, status, Query
from app.database.connection import get_db, AsyncSession
from .schemas import *
from .services import *
from typing import Literal
from .models import TargetKey

router = APIRouter(
    prefix="/products",
    tags=["Products"],
    responses={404: {"description": "Not found"}},
)

@router.get("/", status_code=status.HTTP_200_OK, response_model=PaginatedProductResponse)
async def get_products(
    db: AsyncSession = Depends(get_db),
    page: int = Query(1, ge=1),
    limit: int = Query(20, ge=1, le=100),
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
    ):
    """
    Get paginated products with category, subcategory and variants
    
    Can be filtered by query params
    
    Can update default pagination params
    """
    return await get_products_service(
        db, 
        page, 
        limit,
        new_arrivals,
        category_id,
        color_name,
        size,
        target_key,
        sort
        )


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=ProductSchema)
async def create_new_product(
    payload: ProductCreateRequestSchema,
    db: AsyncSession = Depends(get_db), 
):
    """
    Create a new product with its variant
    
    Format alidation on request body
    
    Validation image url (check if image is reachable)
    
    (AUTHENTICATION AND ADMIN ROLE REQUIRED)
    """
    
    return await create_product_service(db, payload)


@router.get("/{product_id}", status_code=status.HTTP_200_OK, response_model=ProductSchema)
async def get_product_details(
    product_id: int, 
    db: AsyncSession = Depends(get_db)
):
    """
    Get product details with relationships
    """
    
    return await get_product_details_service(db, product_id)


@router.patch("/{product_id}", status_code=status.HTTP_200_OK, response_model=ProductSchema)
async def update_product(
    payload: ProductUpdateRequestSchema,    
    product_id: int, 
    db: AsyncSession = Depends(get_db),
):
    """
    Update a product
    
    This endpoint can also be used to update a product variant
    
    (AUTHENTICATION AND ADMIN ROLE REQUIRED)
    """
    
    return await update_product_service(db, product_id, payload)


@router.delete("/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_product(product_id: int, db: AsyncSession = Depends(get_db)):
    """
    Delete permanently a product and every related variant
    
    (AUTHENTICATION AND ADMIN ROLE REQUIRED)
    """
    
    return await delete_product_service(db, product_id)