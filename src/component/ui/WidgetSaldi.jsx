import { Link } from "react-router-dom";
import CardProdotti from "./layout/CardProdotti";
import Prodotti from "../../data/prodotti.json";
import { IoIosArrowRoundForward } from "react-icons/io";

function WidgetSaldi() {
  return (
    <>
      <div className="bg-[#FDFCF9]">
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8  md:pt-2 md:pb-15">
          <div className="flex flex-col justify-start items-start">
            <div className="w-full">
              <div>
                <span className="uppercase text-sm font-text text-[#C47048] mt-8">In saldo</span>
              </div>
              <div className="flex w-full justify-between items-center">
                <h2 className="font-title text-[#211D1A] font-semibold text-title-size text-center lg:text-[2.25rem]">
                  I nostri sconti estivi
                </h2>
                <Link
                  to="/saldi"
                  className="flex items-center transition-all hover:text-[#C47048] duration-300 hover:underline"
                >
                  <p>Vedi tutti</p>
                  <IoIosArrowRoundForward />
                </Link>
              </div>
            </div>
            <div className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
                {Prodotti
                  .filter((item) => item.sale > 0)
                  .slice(0, 4)
                  .map((item) => (
                    <CardProdotti key={item.id} product={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WidgetSaldi;