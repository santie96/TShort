import { NavLink } from "react-router-dom"

function HeroSaldi() {
    return (
        <>
        
        <section className="relative bg-[url('/src/img/Saldi.webp')] max-[769px]:bg-bottom bg-cover bg-no-repeat min-h-[55vh] md:min-h-140">
            <div className="flex flex-col justify-center items-center absolute w-full h-full inset-0 bg-black/50">
                <h2 className="text-[#F6F4F0] font-title text-6xl">SALDI</h2>
                <h3 className="text-[#F6F4F0] font-text mt-3 text-2xl">fino al <span className="font-bold bg-[#F6F4F0] text-[#D33B36]">50%</span></h3>
                <p className="mt-4 text-white font-text text-size">Scopri lo sconto su articoli selezionati.</p>
                <div>
                    <button
                        type="button"
                        className="text-[#F6F4F0] font-semibold mt-4 cursor-pointer rounded-md lg:py-2 lg:px-6 py-2 px-4 text-stitle-size bg-[#D33B36] transition-transform hover:scale-110 duration-300 shadow">
                        <NavLink to="/saldi">Approfittane ora</NavLink>
                    </button>
                </div>
                <p className="text-[#F6F4F0] text-sm mt-3">Saldi disponibili fino al 10/08.</p>
            </div>
            
        </section>
        </>
        
    )
}

export default HeroSaldi