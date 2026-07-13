import { Link } from "react-router-dom";
import CardProdotti from "./layout/CardProdotti";
import prodotti from "../../data/prodotti.json";
import { IoIosArrowRoundForward } from "react-icons/io";

function WidgetNuoviArrivi() {
  return (
    <>
      <div className="bg-[#F6F4F0]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-start items-start">
            <div className="w-full">
              <div>
                <span className="uppercase text-sm font-text text-[#C47048] mt-8">Appena arrivati</span>
              </div>
              <div className="flex w-full justify-between items-center">
                <h2 className="font-title text-[#211D1A] font-semibold text-title-size text-center lg:text-[2.25rem]">
                  Nuovi arrivi
                </h2>
                <Link
                  to="/nuovi-arrivi"
                  className="flex items-center transition-all hover:text-[#C47048] duration-300 hover:underline"
                >
                  <p>Vedi tutti</p>
                  <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
                {prodotti
                  .filter((item) => item.newArrivals)
                  .slice(0, 4)
                  .map((item) => (
                    <CardProdotti key={item.title} {...item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WidgetNuoviArrivi;
