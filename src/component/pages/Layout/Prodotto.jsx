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
            <div className="bg-[#FDFCF9]">
                <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:py-15">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="mt-3 aspect-4/5 md:aspect-3/4">
                            {/* immagine */}
                            <img src={prodotto.image} alt={prodotto.title} className="rounded-xl w-full h-full object-cover block" />
                        </div>

                        {/* Descrzione, prezzo */}
                        <div>
                            <div className="flex w-full justify-between items-center">
                                <h2>{prodotto.title}</h2>
                                <span>{prodotto.price}</span>
                            </div>

                            <div className="flex w-full justify-between items-center">

                                <p>{prodotto.description}</p>

                                <span>Recensioni</span>
                            </div>


                            {prodotto.sizes.map((size) => (
                                <div className="flex">
                                    <button type="button" key={size}>{size} </button>
                                </div>
                            ))
                            }

                            {prodotto.colors.map((color) => (
                                <div>
                                    <button type="button" key={color.hex} className={`bg-[${color.hex}] p-10`}></button>
                                </div>
                            ))
                            }
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
            </div >


        </>
    )
}

export default Prodotto