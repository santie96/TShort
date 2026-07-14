import CardRecensioni from "./layout/CardRecensioni";
import Recensioni from "../../data/recensioni.json"



function WidgetRecensioni() {
    return (

        <>
            <div className="bg-[#FDFCF9]">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8  md:pt-2 md:pb-15">
                    <div className="w-full">
                        <div>
                            <span className="uppercase text-sm font-text text-[#C47048] mt-8">Recensioni</span>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <h2 className="font-title text-[#211D1A] font-semibold text-title-size text-center lg:text-[2.25rem]">
                                Amati dai nostri clienti
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-3 md:gap-8">
                        {Recensioni
                            .slice(0, 4)
                            .map((item) => (
                        <CardRecensioni key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default WidgetRecensioni