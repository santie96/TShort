import CardProdotti from "./CardProdotti";
import DataProdotti from "../../../data/prodotti.json"

function ContProdotti() {
  return (
    <>
      <div>
        <div className="bg-[#F6F4F0] w-full">
          <div className="flex flex-col justify-center items-center">
            <span className="uppercase text-sm font-text text-[#C47048] mt-8">Fai la tua scelta</span>
            <h2 className="font-title text-[#211D1A] font-semibold text-title-size text-center lg:text-[2.25rem]">
              Uno stile per tutta la famiglia
            </h2>
            <div className=" px-4 sm:px-6 lg:px-75 py-4 md:py-6">
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {categorie.map((item) => (
                  <CardProdotti key={item.title} {...item} />
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContProdotti;