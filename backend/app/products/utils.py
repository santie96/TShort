from .models import TargetKey

def create_category_slug(name: str) -> str:
    return name.lower().replace(" ", "-")

def create_subcategory_slug(name: str) -> str:
    return name.lower().replace(" ", "-")

def create_product_slug(title: str, target: TargetKey) -> str:
    return f"{title.lower().replace(' ', '-')}-{target.value}"

# TODO: create unique identifier for product variant