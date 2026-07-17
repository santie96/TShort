import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function CardProdotti({ id, image, title, subtitle, price, to, newArrivals, sale }) {
  const [isLargeScreen, setIsLargeScreen] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const badgeText = newArrivals ? "Novità" : sale > 0 ? "Saldi" : "";
  const badgeColor = newArrivals ? "bg-[#3F8AAC]" : sale > 0 ? "bg-red-600" : "hidden";

  const priceSale = price - ((price * sale) / 100);

  const truncate = (num, decimals = 2) => {
    const factor = 10 ** decimals;
    return Math.floor(num * factor) / factor;
  };

  const priceSale2 = truncate(priceSale, 2).toFixed(2);

  const priceTot = sale === 0 ? price : priceSale2;

  const showSale = !newArrivals && sale > 0;

  return (
    <>
      <div className="flex flex-col">
        <Link to={`/prodotto/${id}`} className="relative overflow-hidden rounded-xl">
          <div className="relative group aspect-3/4 sm:aspect-4/5 ">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover block transition-all group-hover:scale-105 duration-500 ease-in-out"
            />
            {badgeText && (
              <div className="absolute top-0 p-3 md:p-5 lg:p-5 inset-0">
                <span className={`text-[#F6F4F0] rounded-md px-1.5 py-[0.175rem] text-sm md:text-base ${badgeColor}`}>
                  {badgeText}
                </span>
              </div>
            )}

            <div className="absolute bottom-0 flex flex-1 items-end p-5 md:p-5 lg:p-5 w-full h-full inset-0 bg-[#191101]/10 justify-center">
              <div className="py-2.5 w-full lg:translate-y-3 lg:opacity-0 bg-[#C47048] text-[#FDFCF8] rounded-full cursor-pointer flex justify-center items-center lg:transition-all lg:group-hover:bg-[#C47048] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:duration-500 lg:ease-in-out text-base  font-semibold">
                <button type="button" className="cursor-pointer flex items-center justify-center gap-2">
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
        </Link>
        <div className="text-black font-text flex flex-col gap-1">
          <h2 className="text-base font-semibold font-title l">{title}</h2>
          <p className="text-sm font-text">{subtitle}</p>

          {showSale ? (
            <div className="flex gap-2 items-center font-text">

              <span className="text-sm font-text line-through font-medium">{price}€</span>

              <div className="flex gap-2 items-center bg-red-500/20 px-1">
                <span className="text-red-600 font-medium">{`${priceTot}`}€</span>
                <span className="text-red-600 text-sm font-medium">{sale}%</span>
              </div>


            </div>) : (
            <>
              <span className="font-text font-medium">{price}€</span>
            </>
          )}


        </div>
      </div>
    </>
  );
}

export default CardProdotti;
