import Prodotti from "../../data/prodotti.json";
import CardProdotti from "../ui/layout/CardProdotti";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

function ABambini() {
  return (
    <>
      <div className="bg-[#FDFCF9]">
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8  md:pt-2 md:pb-15">
          <div className="flex flex-col justify-start items-start">
            <div className="mt-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
                {Prodotti.filter(
                  (item) =>
                    item.categories === "bambino" ||
                    item.categories === "bambina",
                ).map((item) => (
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

export default ABambini;
