import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import prodotti from "../../../data/prodotti.json"



function ProdottoDettagli({ image, title, price, description, color, sizes }) {



    const { id } = useParams();
    console.log("id ricevuto dall'URL:", id, typeof id);

    return (
        <>
            <div className="bg-[#F6F4F0]">
                <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:py-15">
                    <div className="grid grid-cols-1">
                        <div>
                            {/* immagine */}
                            <div>
                                <img src={image} alt={title} />
                            </div>

                            {/* Descrzione, prezzo */}
                            <div>
                                <div>
                                    <h2>{title}</h2>
                                    <span>{price}</span>
                                </div>

                                <div>
                                    <p>{description}</p>
                                </div>
                                <span>Recensioni</span>

                                <div>
                                    <button>{sizes}</button>
                                </div>

                                <div>
                                    <button>{color}</button>
                                </div>

                            </div>
                        </div>


                        <div>
                            {/* Info spedizioni */}
                            <div>
                                <Link><p>{`Spedzione Gratuita (ordini > 40€)`}</p></Link>
                                <Link><p>{`Resi gratuiti entro 30 giorni`}</p></Link>
                                <Link><p>Pagamenti sicuri - Tutela della privacy</p></Link>
                            </div>

                            {/* Recensioni */}
                            <div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default ProdottoDettagli