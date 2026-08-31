from app.products.models import *
from json import loads
from pathlib import Path

PRODUCT_JSON_PATH = Path(__file__).resolve().parent / "data" / "prodotti.json" 
PRODUCT_SLUG_JSON_PATH = Path(__file__).resolve().parent / "data" / "prodotti_slug.json"

def read_json(path: Path) -> dict: 
    with open(path) as file:
        return loads(file.read())
    

product_json = read_json(PRODUCT_JSON_PATH)
product_slug_json = read_json(PRODUCT_SLUG_JSON_PATH)

