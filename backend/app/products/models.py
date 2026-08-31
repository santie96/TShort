from app.database.connection import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy import String, Text, Enum as SQLAEnum, Integer, Boolean, DateTime, func, ForeignKey
from enum import Enum
from datetime import datetime


class TargetKey(str, Enum):
    UOMO = "uomo"
    DONNA = "donna"
    BAMBINO = "bambino"
    BAMBINA = "bambina"


class Category(Base):

    __tablename__ = "categories"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    slug: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)
    is_active: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        default=True
    )

    products: Mapped[list["Product"]] = relationship(
        "Product", back_populates="category", cascade="all, delete-orphan"
    )

    sub_categories: Mapped[list["SubCategory"]] = relationship(
        "SubCategory", back_populates="category", cascade="all, delete-orphan"
    )


class SubCategory(Base):

    __tablename__ = "sub_categories"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    slug: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)
    is_active: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        default=True
    )

    category_id: Mapped[int] = mapped_column(
        ForeignKey("categories.id"), nullable=False
    )

    category: Mapped["Category"] = relationship(
        "Category", back_populates="sub_categories")

    products: Mapped[list["Product"]] = relationship(
        "Product", back_populates="category", cascade="all, delete-orphan"
    )


class Product(Base):

    __tablename__ = "products"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    title: Mapped[str] = mapped_column(String(100), nullable=False)
    subtitle: Mapped[str] = mapped_column(String(100), nullable=False)
    description: Mapped[str] = mapped_column(Text, nullable=False)

    # genera sequenza per url
    slug: Mapped[str] = mapped_column(String(100), nullable=False, unique=True)

    prince_cents: Mapped[int] = mapped_column(
        Integer,
        nullable=False
    )
    sale_percent: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=0
    )
    new_arrivals: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        default=False
    )
    image_url: Mapped[str] = mapped_column(
        String(300),
        nullable=False
    )
    is_active: Mapped[bool] = mapped_column(
        Boolean,
        nullable=False,
        default=True
    )
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        nullable=False,
        server_default=func.now(),
        onupdate=func.now()
    )

    category_id: Mapped[int] = mapped_column(
        ForeignKey("categories.id"), nullable=False
    )

    subcategory_id: Mapped[int] = mapped_column(
        ForeignKey("sub_categories.id"), nullable=False
    )

    # ==================
    # relazioni
    # ==================
    category: Mapped["Category"] = relationship(
        "Category", back_populates="products"
    )

    subcategory: Mapped["SubCategory"] = relationship(
        "SubCategory", back_populates="products"
    )

    variants: Mapped[list["ProductVariant"]] = relationship(
        "ProductVariant", back_populates="product", cascade="all, delete-orphan"
    )


class ProductVariant(Base):

    __tablename__ = "product_variants"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)

    product_id: Mapped[int] = mapped_column(
        ForeignKey("products.id"), nullable=False)

    size: Mapped[str] = mapped_column(String(20), nullable=False)

    color_name: Mapped[str] = mapped_column(String(100), nullable=False)
    color_hex: Mapped[str] = mapped_column(String(7), nullable=False)

    target_key: Mapped[TargetKey] = mapped_column(
        SQLAEnum(TargetKey),
        nullable=False
    )

    stock: Mapped[int] = mapped_column(Integer, nullable=False, default=0)

    product: Mapped[Product] = relationship(
        "Product", back_populates="variants"
    )


# TODO dopo implementazione flusso utenti
# class ProductReview(Base):
#     pass
