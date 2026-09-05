from pydantic import BaseModel, ConfigDict, field_validator, field_serializer
from datetime import datetime
from .models import TargetKey
from re import match
from app.core.schemas import SyncModelORM
from app.categories.schemas import CategorySchema, SubCategorySchema

# ====================================
# PRODUCT
# ====================================

class ProductSchema(SyncModelORM):
    id: int
    title: str
    subtitle: str
    description: str
    slug: str
    price_cents: float
    sale_percent: int
    new_arrivals: bool
    image_url: str
    is_active: bool
    created_at: datetime
    updated_at: datetime

    category: CategorySchema
    sub_category: SubCategorySchema
    variants: list[ProductVariantSchema]

    @field_serializer("price_cents")
    def serialize_price_cents(self, value: int) -> float:
        """
        Serialize the price_cents field as a float in API Response
        """
        return value / 100

class ProductCreateRequestSchema(BaseModel):
    title: str
    subtitle: str
    description: str
    price_cents: int
    sale_percent: int | None = None
    new_arrivals: bool | None = None
    image_url: str
    
    category_id: int
    sub_category_id: int

    variant: ProductVariantCreateRequestSchema
    
    @field_validator("title")
    @classmethod
    def validate_title(cls, value: str) -> str:
        if not match(r"^[\w ]{1,100}$", value):
            raise ValueError("title length must be between 1 and 100 characters")
        return value
    
    @field_validator("subtitle")
    @classmethod
    def validate_subtitle(cls, value: str) -> str:
        if not match(r"^[\w ]{1,100}$", value):
            raise ValueError("subtitle length must be between 1 and 100 characters")
        return value
    
    
    @field_validator("sale_percent")
    @classmethod
    def validate_sale_percent(cls, value: int) -> int:
        if value < 0 or value > 100:
            raise ValueError("sale_percent must be between 0 and 100")
        return value
    
    @field_validator("price_cents")
    @classmethod
    def validate_price_cents(cls, value: int) -> int:
        if value < 0:
            raise ValueError("price_cents must be positive value")
        return value
    

    @field_validator("category_id")
    @classmethod
    def validate_category_id(cls, value: int) -> int:
        if value < 0:
            raise ValueError("category_id must be positive value")
        return value    
    
    @field_validator("sub_category_id")
    @classmethod
    def validate_sub_category_id(cls, value: int) -> int:
        if value < 0:
            raise ValueError("sub_category_id must be positive value")
        return value    
    
    
class ProductUpdateRequestSchema(ProductCreateRequestSchema):
    title: str | None = None
    subtitle: str | None = None
    description: str | None = None
    price_cents: int | None = None
    sale_percent: int | None = None
    new_arrivals: bool | None = None
    image_url: str | None = None
    
    category_id: int | None = None
    sub_category_id: int | None = None
    
    variant: ProductVariantUpdateRequestSchema
    
    
class PaginatedProductResponse(BaseModel):
    total_items: int
    total_pages: int
    items_per_page: int
    prev_page: int | None
    current_page: int
    next_page: int | None
    items: list[ProductSchema]


# ====================================
# PRODUCT VARIANT
# ====================================

class ProductVariantSchema(SyncModelORM):
    id: int
    size: str
    color_name: str
    color_hex: str
    target_key: TargetKey
    stock: int
    
    @field_validator("stock")
    @classmethod
    def validate_stock(cls, value: int) -> int:
        if value < 0:
            raise ValueError("stock must be greater than 0")
        return value


class ProductVariantCreateRequestSchema(BaseModel):
    size: str
    color_name: str
    color_hex: str
    target_key: TargetKey
    stock: int    
        
    @field_validator("stock")
    @classmethod
    def validate_stock(cls, value: int) -> int:
        if value < 0:
            raise ValueError("stock must be positive value")
        return value
    
    @field_validator("color_hex")
    @classmethod
    def validate_color_hex(cls, value: str) -> str:
        if not match(r"^#([A-Fa-f0-9]{6})$", value):
            raise ValueError("color_hex must be a valid hex color code")
        return value
    
class ProductVariantUpdateRequestSchema(ProductVariantCreateRequestSchema):
    id: int
    
    size: str | None = None
    color_name: str | None = None
    color_hex: str | None = None
    target_key: TargetKey | None = None
    stock: int | None = None
    
    @field_validator("id")
    @classmethod
    def validate_id(cls, value: int) -> int:
        if value < 0:
            raise ValueError("id must be positive value")
        return value