import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function CardProdotti({ id, image, title, subtitle, to, newArrivals, sale }) {
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
  const badgeColor = newArrivals ? "bg-[#3F8AAC]" : sale > 0 ? "bg-[#D33B36]" : "hidden";
  
  return (
    <>
      <div className="flex flex-col">
        <NavLink to={to} className="relative overflow-hidden rounded-xl">
          <div className="relative group aspect-3/4 sm:aspect-4/5 ">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover block transition-all group-hover:scale-105 duration-500 ease-in-out"
            />
            {badgeText && (
              <div className="absolute top-0 p-3 md:p-5 lg:p-5 inset-0">
                <span className={`text-[#F6F4F0] rounded-2xl px-1.5 py-[0.175rem] text-sm ${badgeColor}`}>
                  {badgeText}
                </span>
              </div>
            )}

            <div className="absolute bottom-0 flex flex-1 items-end p-5 md:p-5 lg:p-5 w-full h-full inset-0 bg-[#191101]/10 justify-center">
              <div className="py-2.5 w-full translate-y-3 opacity-0 bg-[#23201D] max-[1024px]:bg-[#C47048] text-[#FDFCF8] rounded-full cursor-pointer flex justify-center items-center transition-all group-hover:bg-[#C47048] group-hover:opacity-100 group-hover:translate-y-0 duration-500 ease-in-out text-base font-semibold">
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
        </NavLink>
        <div className="text-black">
          <h2 className="text-base font-semibold font-title">{title}</h2>
          <p className="text-sm font-text">{subtitle}</p>
        </div>
      </div>
    </>
  );
}

export default CardProdotti;
