import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../utilities/Logic-JS/prodottiService";
import WidgetRecensioni from "../../ui/WidgetRecensioni"



function Prodotto() {

    const { id } = useParams();

    const [prodotto, setProdotto] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let isCurrent = true

        async function loadProduct() {
            setStatus("loading");


            try {
                const data = await getProductById(id);
                if (!isCurrent) return;
                setProdotto(data);
                setStatus("success")
            } catch (error) {
                if (isCurrent) setStatus("error");
            }
        }

        loadProduct()

        return () => { isCurrent = false; };
    }, [id]);

    if (status === "loading") {
        return <p>Caricamento prodotto...</p>;
    }

    if (status === "error") {
        return <p>Prodotto non trovato.</p>;
    }

    return (
        <>
            <div className="bg-[#FDFCF9] font-text ">
                <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:py-15">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="mt-3 aspect-4/5 md:aspect-3/4">
                            {/* immagine */}
                            <img src={prodotto.image} alt={prodotto.title} className="rounded-xl w-full h-full object-cover block" />
                        </div>
                        <div className="p-2">
                            {/* Descrzione, prezzo */}
                            <div>
                                <div className="flex w-full justify-between items-center">
                                    <h2 className="text-title-size font-title font-semibold">{prodotto.title}</h2>
                                    <span>{prodotto.price}€</span>
                                </div>

                                <div className="flex w-full justify-between items-center">

                                    <p className="text-[0.9rem]">{prodotto.description}</p>

                                    <span>Recensioni</span>
                                </div>



                                <div className="flex flex-wrap gap-2 mt-3 py-1">
                                    {prodotto.sizes.map((size) => (
                                        <button type="button" key={size} className="h-8 w-13 font-text text-base font-semibold border-2 cursor-pointer border-black rounded-3xl hover:bg-gray-100 transition-all duration-300">{size} </button>

                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 py-1">
                                    {prodotto.colors.map((color) => (
                                        <button
                                            key={color.hex}
                                            type="button"
                                            className="group cursor-pointer relative h-11 w-11 rounded-full border-2 border-white bg-transparent p-0 transition-transform duration-200 hover:scale-105"
                                            aria-label={color.name}
                                        >
                                            <span
                                                className="absolute inset-0 rounded-full border-4 border-white transition-all duration-200 group-hover:outline-2 group-hover:outline-black"
                                                style={{ backgroundColor: color.hex }}
                                            />

                                        </button>
                                    ))}
                                </div>
                            </div>




                            {/* Info spedizioni */}
                            <div>
                                <Link><p>{`Spedzione Gratuita (ordini > 40€)`}</p></Link>
                                <Link><p>{`Resi gratuiti entro 30 giorni`}</p></Link>
                                <Link><p>Pagamenti sicuri - Tutela della privacy</p></Link>
                            </div>

                            {/* Recensioni */}
                            <div className="">
                                <WidgetRecensioni />
                            </div>



                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}

export default Prodotto
