import prodottiData from "./prodotti.json"
import recensioniData from "./recensioniProdotti.json"

export async function getProductById(id) {

    const prodotto = prodottiData.find((p) => String(p.id) === String(id));
    if (!prodotto) {
        throw new Error(`Prodotto con id "${id}" non trovato`)
    }

    const recensioni = recensioniData.filter(
        (r) => String(r.productId) === String(id)
    );

    return { ...prodotto, recensioni };
}