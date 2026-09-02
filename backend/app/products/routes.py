from fastapi import APIRouter, Depends, status
from app.database.connection import get_db, AsyncSession
from .schemas import ProductSchema
from .services import *

router = APIRouter(
    prefix="/products",
    tags=["Products"],
    responses={404: {"description": "Not found"}},
)


@router.get("/", status_code=status.HTTP_200_OK, response_model=list[ProductSchema])
async def get_all_products(db: AsyncSession = Depends(get_db)):
    return await get_all_products_service(db)

@router.post("/", status_code=status.HTTP_201_CREATED, response_model=ProductSchema)
async def create_new_product(
    payload: ProductCreateRequestSchema,
    db: AsyncSession = Depends(get_db), 
):
    return await create_product_service(db, payload)

# @router.get("/{product_id}", status_code=status.HTTP_200_OK, response_model=ProductSchema)
# async def get_product_details(db: AsyncSession = Depends(get_db)):
#     pass

# @router.patch("/{product_id}", status_code=status.HTTP_200_OK, response_model=ProductSchema)
# async def update_product(db: AsyncSession = Depends(get_db)):
#     pass

# @router.delete("/{product_id}", status_code=status.HTTP_204_NO_CONTENT, response_model=ProductSchema)
# async def delete_product(db: AsyncSession = Depends(get_db)):
#     pass
