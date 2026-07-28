import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../../utilities/Logic-JS/prodottiService";
import { calcoloPrezzoScontato } from "../../utilities/Logic-JS/prezzoService";
import { screenSize } from "../../utilities/Logic-JS/screenSizeService";
import { useRecensioniCarousel } from "../../utilities/Logic-JS/recensioniService";
import CardRecensioni from "../../ui/layout/CardRecensioni";
import { MdOutlineAddShoppingCart, MdCreditScore, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BiPackage } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
import Stars from "../../utilities/Stars";





function Prodotto() {

    const isLargeScreen = screenSize()


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

    const productReviews = Array.isArray(prodotto?.recensioni) ? prodotto.recensioni : [];

    const { slideReview, visibleReviews, next, back, lastStartIndex } = useRecensioniCarousel(productReviews);

    if (status === "loading") {
        return <p>Caricamento prodotto...</p>;
    }

    if (status === "error" || !prodotto) {
        return <p>Prodotto non trovato.</p>;
    }

    const { OriginalPrice, priceTot, showSale } = calcoloPrezzoScontato(prodotto.price, prodotto.sale, prodotto.newArrivals)
    const sizes = Array.isArray(prodotto.sizes) ? prodotto.sizes : [];
    const colors = Array.isArray(prodotto.colors) ? prodotto.colors : [];

    const totalReviews = productReviews.length;
    const averageRating = totalReviews
        ? productReviews.reduce((sum, review) => sum + review.Stars, 0) / totalReviews
        : 0;

    const roundedRating = Math.round(averageRating * 2) / 2;

    return (
        <>
            <div className="bg-[#FDFCF9] font-text ">
                <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8 lg:py-15">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                        {/* immagine */}

                        <div className="mt-3 aspect-4/5 md:aspect-3/4 lg:max-w-md lg:mx-auto">

                            <img src={prodotto.image} alt={prodotto.title} className="rounded-xl w-full h-full object-cover block" />
                        </div>



                        <div className="flex flex-col gap-4 p-2 lg:mt-3">


                            <div className="flex flex-col gap-2 lg:gap-4">
                                <div className="flex flex-col gap-4 lg:gap-2">
                                    {/* titolo, prezzo */}
                                    <div className="flex w-full justify-between items-center">
                                        <h2 className="text-2xl lg:text-3xl font-title font-semibold">{prodotto.title}</h2>
                                        {showSale ? (
                                            <div className="flex items-center gap-2 lg:gap-5 font-text">
                                                <span className="font-medium line-through text-black  lg:text-sm">{OriginalPrice}€</span>
                                                <div className="flex items-center gap-2 rounded bg-red-500/20 px-2 py-1">
                                                    <span className="font-medium text-xl lg:text-base text-red-600">{priceTot}€</span>
                                                    <span className="font-medium text-red-600 lg:text-sm">-{prodotto.sale}%</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <span className="font-medium lg:text-base lg:font-semibold">{OriginalPrice}€</span>
                                        )}
                                    </div>


                                    {/* descirizione, recensioni */}
                                    <div className="flex w-full justify-between items-center">

                                        <p className="text-[0.9rem] lg:text-base text-balance lg:max-w-sm">{prodotto.description}</p>

                                        {totalReviews > 0 ? (
                                            <a href="#custom-reviews">
                                                <div className="flex group shrink-0 flex-col items-end gap-1">
                                                    <Stars rating={roundedRating} />

                                                    <span className="text-sm text-black font-semibold  transition-all  md:group-hover:border-b md:group-hover:border-b-black">
                                                        {averageRating.toFixed(1).replace(".", ",")} / 5
                                                    </span>

                                                </div>
                                            </a>
                                        ) : (
                                            <span className="text-sm text-gray-600">Nessuna recensione</span>
                                        )}
                                    </div>
                                </div>

                                <hr className="text-[#DDDAD5] my-1 md:my-0 border" />

                                <div className="flex flex-col gap-4 lg:gap-3 font-text">
                                    {/* taglie */}
                                    <div className="flex flex-col gap-2 lg:gap-1">
                                        <h2 className="font-semibold text-xl lg:text-base">Taglie</h2>
                                        <div className="flex flex-wrap gap-2 py-1">
                                            {sizes.map((size) => (
                                                <button
                                                    type="button"
                                                    key={size}
                                                    className="h-8 lg:h-6 w-13 lg:w-10 font-text text-base lg:text-sm font-semibold border-2 cursor-pointer border-black rounded-3xl hover:bg-gray-600 transition-all duration-300"
                                                >
                                                    {size}
                                                </button>

                                            ))}
                                        </div>
                                    </div>


                                    {/* colori */}
                                    <div className="flex flex-col gap-1">
                                        <h2 className="font-semibold text-xl lg:text-base">Colori</h2>
                                        <div className="flex flex-wrap gap-2 py-1">
                                            {colors.map((color) => (
                                                <button
                                                    key={color.hex}
                                                    type="button"
                                                    className="group cursor-pointer relative h-10 lg:h-8 w-10 lg:w-8 rounded-full border-2 border-[#FDFCF9] bg-transparent transition-transform duration-200 hover:scale-105"
                                                    aria-label={color.name}
                                                >
                                                    <span
                                                        className="absolute inset-0 rounded-full border-4 border-[#FDFCF9] transition-all duration-200 group-hover:outline-2 group-hover:outline-black"
                                                        style={{ backgroundColor: color.hex }}
                                                    />

                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3 lg:gap-2 items-center">
                                        <h2 className="font-semibold text-xl lg:text-base">Disponibilità</h2>
                                        <div className="border border-[#DDDAD5] bg-[#F6F4F0] py-1 px-2 rounded-full">
                                            <span className="text-black lg:text-sm font-semibold">{prodotto.stock}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>


                            {/* pulsante */}
                            <div className=" flex items-end md:p-5 lg:p-5 w-full justify-center">

                                <div className="w-full 
                                py-2 lg:py-3 bg-[#C47048] lg:bg-[#23201D] lg:hover:bg-[#C47048] lg:transition-colors lg:hover:duration-300 text-[#FDFCF8] rounded-full cursor-pointer flex justify-center items-center text-base font-semibold hover:bg-">
                                    <button type="button" className="cursor-pointer flex items-center justify-center gap-2">
                                        {isLargeScreen ? (
                                            <span className="text-xl">+ Aggiungi al carrello</span>
                                        ) : (
                                            <>
                                                <MdOutlineAddShoppingCart className="text-lg" />
                                                <span>Aggiungi</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Info spedizioni */}
                            <div className="h-auto rounded-2xl border border-[#DDDAD5] bg-[#F6F4F0] font-text">
                                <div className="flex flex-col gap-3 p-4 ">


                                    <Link className="flex items-center justify-between">
                                        <p className="font-semibold flex items-center gap-1 lg:gap-3 lg:text-[1.125rem]"><TbTruckDelivery /> {`Spedizione Gratuita`} <span className="lg:text-base text-[0.9rem]  font-normal">{`(per ordini > 40€)`}</span></p>

                                        <IoIosArrowRoundForward className="text-xl" />
                                    </Link>

                                    <hr className="text-[#DDDAD5] my-1" />

                                    <Link className="flex items-center justify-between"><p className="font-semibold flex items-center gap-1 lg:gap-3 lg:text-[1.125rem]"><BiPackage /> {`Resi gratuiti entro 30 giorni`}</p>
                                        <IoIosArrowRoundForward className="text-xl" />
                                    </Link>

                                    <hr className="text-[#DDDAD5] my-2" />

                                    <Link className="flex items-center justify-between">
                                        <p className="font-semibold flex items-center gap-1 lg:gap-3 lg:text-[1.125rem]"><MdCreditScore /> Pagamenti sicuri - Tutela della privacy</p>
                                        <IoIosArrowRoundForward className="text-xl" />
                                    </Link>


                                </div>
                            </div>

                        </div>




                        {/* Recensioni */}
                        <div className="p-4 md:col-span-2 scroll-mt-80" id="custom-reviews">
                            <div className="flex items-center justify-between gap-3">
                                <h3 className="font-title text-lg font-semibold">Recensioni del prodotto</h3>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="shrink-0 cursor-pointer disabled:cursor-default disabled:opacity-40"
                                        onClick={back}
                                        disabled={slideReview === 0}
                                        aria-label="Mostra le recensioni precedenti"
                                    >
                                        <MdArrowBackIos className="text-xl" />
                                    </button>
                                    <button
                                        type="button"
                                        className="shrink-0 cursor-pointer disabled:cursor-default disabled:opacity-40"
                                        onClick={next}
                                        disabled={slideReview === lastStartIndex}
                                        aria-label="Mostra le recensioni successive"
                                    >
                                        <MdArrowForwardIos className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                                {visibleReviews.map((review) => (
                                    <CardRecensioni key={review.id} {...review} />
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </div >


        </>
    )
}

export default Prodotto
