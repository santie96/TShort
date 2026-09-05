import asyncio
from json import loads
from pathlib import Path

from app.database.connection import AsyncSessionLocal
from app.products.models import Product, ProductVariant, TargetKey
from app.categories.models import Category, SubCategory

DATA_DIR = Path(__file__).resolve().parent / "data"
PRODUCTS_PATH = DATA_DIR / "prodotti2.json"
CATEGORIES_PATH = DATA_DIR / "prodotti_slug.json"


def read_json(path: Path):
    with open(path, encoding="utf-8") as file:
        return loads(file.read())


def to_cents(price: float) -> int:
    return round(price * 100)


def distribute_stock(total: int, n_variants: int) -> list[int]:
    """Divide 'total' in n_variants parti il più possibile equilibrate,
    distribuendo il resto della divisione sulle prime varianti."""
    if n_variants == 0:
        return []
    base, remainder = divmod(total, n_variants)
    return [base + 1 if i < remainder else base for i in range(n_variants)]


async def seed() -> None:
    products_data = read_json(PRODUCTS_PATH)
    categories_data = read_json(CATEGORIES_PATH)["products"]

    categories_raw: dict[str, dict] = {}
    subcategories_raw: dict[str, dict] = {}
    
    # product_id -> {category_slug, subcategory_slug}
    product_meta: dict[int, dict] = {}  

    for item in categories_data:
        category = item["category"]
        subcategory = item["subcategory"]

        categories_raw.setdefault(category["slug"], {"name": category["name"], "slug": category["slug"]})
        subcategories_raw.setdefault(
            subcategory["slug"],
            {"name": subcategory["name"], "slug": subcategory["slug"], "category_slug": category["slug"]},
        )
        product_meta[item["id"]] = {
            "category_slug": category["slug"],
            "subcategory_slug": subcategory["slug"],
        }

    async with AsyncSessionLocal() as session:
        async with session.begin():
            category_objs: dict[str, Category] = {}
            for slug, data in categories_raw.items():
                obj = Category(name=data["name"], slug=slug)
                session.add(obj)
                category_objs[slug] = obj
            await session.flush() 

            subcategory_objs: dict[str, SubCategory] = {}
            for slug, data in subcategories_raw.items():
                parent = category_objs[data["category_slug"]]
                obj = SubCategory(name=data["name"], slug=slug, category_id=parent.id)
                session.add(obj)
                subcategory_objs[slug] = obj
            await session.flush()

            # error handling
            skipped: list[int] = []

            for item in products_data:
                pid = item["id"]
                meta = product_meta.get(pid)
                if meta is None:
                    skipped.append(pid)
                    continue

                category = category_objs[meta["category_slug"]]
                subcategory = subcategory_objs[meta["subcategory_slug"]]

                try:
                    target = TargetKey(item["categories"])
                except ValueError:
                    print(f"[WARN] target sconosciuto '{item['categories']}' per prodotto id={pid}, skip")
                    skipped.append(pid)
                    continue
                
                target_str = target.value if hasattr(target, 'value') else str(target)
                base_slug = item['subtitle'].strip().lower().replace(' ', '-')
                
                product = Product(
                    title=item["title"],
                    subtitle=item["subtitle"],
                    description=item["description"],
                    slug=f"{base_slug}-{target_str}",
                    price_cents=to_cents(item["price"]),
                    sale_percent=item.get("sale", 0),
                    new_arrivals=item.get("newArrivals", False),
                    image_url=item["image"],
                    category_id=category.id,
                    sub_category_id=subcategory.id,
                )
                session.add(product)
                await session.flush()  

                colors = item.get("colors", [])
                sizes = item.get("sizes", [])
                combos = [(c, s) for c in colors for s in sizes]

                stocks = distribute_stock(item.get("stock", 0), len(combos))

                for (color, size), stock in zip(combos, stocks):
                    variant = ProductVariant(
                        product_id=product.id,
                        size=size,
                        color_name=color["nome"],
                        color_hex=color["hex"],
                        target_key=target,
                        stock=stock,
                    )
                    session.add(variant)


    if skipped:
        print(f"Prodotti saltati (id): {skipped}")
    print("Seed completato con successo.")


if __name__ == "__main__":
    asyncio.run(seed())