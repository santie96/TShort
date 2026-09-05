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

class CategoryPaginatedSchema(BaseModel):
    total_items: int
    total_pages: int
    items_per_page: int
    prev_page: int | None
    current_page: int
    next_page: int | None
    items: list[CategorySchema]
    
class CategoryCreateRequestSchema(BaseModel):
    name: str
    
    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        if not match(r"^[A-Za-z0-9 ]{1,100}$", value):
            raise ValueError("name length must be between 1 and 100 characters can contain only alphanumeric characters and spaces")
        return value


class CategoryUpdateRequestSchema(CategoryCreateRequestSchema):
    name: str | None = None
    is_active: bool | None = None

# ====================================
# SUBCATEGORY
# ====================================

class SubCategorySchema(SyncModelORM):
    id: int
    name: str
    slug: str
    is_active: bool
    
    category: CategorySchema

class SubCategoryNestedProductSchema(SyncModelORM):
    id: int
    name: str
    slug: str
    is_active: bool
    

class SubCategoryPaginatedSchema(BaseModel):
    total_items: int
    total_pages: int
    items_per_page: int
    prev_page: int | None
    current_page: int
    next_page: int | None
    items: list[SubCategorySchema]

class SubCategoryCreateRequestSchema(BaseModel):
    name: str
    category_id: int
    
    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        if not match(r"^[A-Za-z0-9 ]{1,100}$", value):
            raise ValueError("name length must be between 1 and 100 characters can contain only alphanumeric characters and spaces")
        return value


class SubCategoryUpdateRequestSchema(SubCategoryCreateRequestSchema):
    name: str | None = None
    is_active: bool | None = None
    category_id: int | None = None
    
