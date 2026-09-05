from pydantic import BaseModel, field_validator
from app.core.schemas import SyncModelORM
from re import match

# ====================================
# CATEGORY
# ====================================
class CategorySchema(SyncModelORM):
    id: int
    name: str
    slug: str
    is_active: bool

    
class CategoryCreateRequestSchema(BaseModel):
    name: str
    
    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        if not match(r"^[\w ]{1,100}$", value):
            raise ValueError("name length must be between 1 and 100 characters")
        return value


class CategoryUpdateRequestSchema(CategoryCreateRequestSchema):
    id: int
    name: str | None = None

    @field_validator("id")
    @classmethod
    def validate_id(cls, value: int) -> int:
        if value < 0:
            raise ValueError("id must be positive value")
        return value
    
# ====================================
# SUBCATEGORY
# ====================================

class SubCategorySchema(SyncModelORM):
    id: int
    name: str
    slug: str
    is_active: bool
    
    
class SubCategoryCreateRequestSchema(BaseModel):
    name: str
    category_id: int
    
    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        if not match(r"^[\w ]{1,100}$", value):
            raise ValueError("name length must be between 1 and 100 characters")
        return value


class SubCategoryUpdateRequestSchema(SubCategoryCreateRequestSchema):
    id: int
    name: str | None = None
    category_id: int | None = None
    
    @field_validator("id")
    @classmethod
    def validate_id(cls, value: int) -> int:
        if value < 0:
            raise ValueError("id must be positive value")
        return value
    