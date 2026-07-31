import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { calcoloPrezzoScontato } from "../../utilities/function-utilities/prezzoService";
import { screenSize } from "../../utilities/Custom-Hook/ScreenSizeService";
import { CartContext } from "../../utilities/context/CartContext"
import { useContext } from "react";


function CardProdotti({ product }) {

  const { addToCart } = useContext(CartContext);

  const isLargeScreen = screenSize()


  const badgeText = product.newArrivals ? "Novità" : product.sale > 0 ? "Saldi" : "";
  const badgeColor = product.newArrivals ? "bg-[#3F8AAC]" : product.sale > 0 ? "bg-red-600" : "hidden";

  const { OriginalPrice, priceTot, showSale } = calcoloPrezzoScontato(product.price, product.sale, product.newArrivals)

  return (
    <>
      <div className="flex flex-col">
        <div className="relative overflow-hidden rounded-xl">

          <div className="relative group aspect-3/4 sm:aspect-4/5 ">
            <Link to={`/prodotto/${product.id}`} className="block h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover block transition-all group-hover:scale-105 duration-500 ease-in-out"
              />
            </Link>

            {badgeText && (
              <div className="pointer-events-none absolute inset-0 z-10 p-3 md:p-5">
                <span className={`text-[#F6F4F0] rounded-md px-1.5 py-[0.175rem] text-sm md:text-base ${badgeColor}`}>
                  {badgeText}
                </span>
              </div>
            )}



            <div className="pointer-events-none absolute inset-0 z-20 flex h-full w-full items-end justify-center bg-[#191101]/10 p-5">
              <div className="pointer-events-auto py-2.5 w-full bg-[#C47048] lg:translate-y-3 lg:opacity-0 lg:bg-[#23201D] text-[#FDFCF8] rounded-full cursor-pointer flex justify-center items-center lg:transition-all lg:hover:bg-[#C47048] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:duration-500 lg:ease-in-out text-base font-semibold">
                <button type="button" className="w-full flex items-center justify-center gap-2 cursor-pointer" onClick={() => addToCart(product)}>
                  {isLargeScreen ? (
                    <span>+ Aggiungi al carrello</span>
                  ) : (
                    <>
                      <MdOutlineAddShoppingCart className="text-lg" />
                      <span>Aggiungi</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="text-black font-text flex flex-col gap-1">
          <h2 className="text-base font-semibold font-title mt-1">{product.title}</h2>
          <p className="text-sm font-text">{product.subtitle}</p>

          {showSale ? (
            <div className="flex gap-2 items-center font-text">

              <span className="text-sm font-text line-through font-medium">{OriginalPrice}€</span>

              <div className="flex gap-2 items-center bg-red-500/20 px-1">
                <span className="text-red-600 font-medium">{`${priceTot}`}€</span>
                <span className="text-red-600 text-sm font-medium">{product.sale}%</span>
              </div>


            </div>) : (
            <>
              <span className="font-text font-medium">{OriginalPrice}€</span>
            </>
          )}


        </div>
      </div >
    </>
  );
}

export default CardProdotti;
