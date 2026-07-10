import CardProdotti from "./CardProdotti";
import prodotti from "../../../data/prodotti.json"

function ContProdotti() {
  return (
    <>
      <div>
        <div className="bg-[#F6F4F0] w-full px-4 sm:px-6 lg:px-75 py-4 md:py-6">
          <div className="flex flex-col justify-start items-start">
            <span className="uppercase text-sm font-text text-[#C47048] mt-8">Appena arrivati</span>
            <h2 className="font-title text-[#211D1A] font-semibold text-title-size text-center lg:text-[2.25rem]">
              Nuovi arrivi
            </h2>
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                {prodotti.map((item) => item.newArrivals ? (
                  <CardProdotti key={item.title} {...item} />
                )
                  : null)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContProdotti;