from pydantic import BaseModel, ConfigDict, field_validator, field_serializer
from datetime import datetime
from .models import TargetKey
from re import match


class SyncModelORM(BaseModel):
    """
    Base class for Pydantic models to include the ORM model configuration and validation
    """
    
    model_config = ConfigDict(from_attributes=True)


class CategorySchema(SyncModelORM):
    id: int
    name: str
    slug: str
    is_active: bool

class SubCategorySchema(SyncModelORM):
    id: int
    name: str
    slug: str
    is_active: bool
    
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
    
    
class CategoryCreateRequestSchema(BaseModel):
    name: str
    
    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        if not match(r"^.{1,100}$", value):
            raise ValueError("name length must be between 1 and 100 characters")
        return value

class SubCategoryCreateRequestSchema(BaseModel):
    name: str
    category_id: int
    
    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        if not match(r"^.{1,100}$", value):
            raise ValueError("name length must be between 1 and 100 characters")
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
        if not match(r"^.{1,100}$", value):
            raise ValueError("title length must be between 1 and 100 characters")
        return value
    
    @field_validator("subtitle")
    @classmethod
    def validate_subtitle(cls, value: str) -> str:
        if not match(r"^.{1,100}$", value):
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