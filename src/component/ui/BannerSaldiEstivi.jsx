import { Link } from "react-router-dom";
import imgBannerEstate from "../../img/banner/banner-saldi-estate.webp"
import { HiArrowLongRight } from "react-icons/hi2";


function BannerSaldiEstivi() {
    return (
        <>
            <div className="bg-[#FDFCF9]">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-15">
                    <div className="relative">
                        <img src={`${imgBannerEstate}`} alt="" className="w-full h-full object-cover block rounded-md" />
                        <div className="absolute top-1/2 -translate-y-1/2 px-5 md:px-10 font-text">
                            <h2 className="font-title text-xl mt-2 md:mt-6 font-semibold md:text-4xl lg:text-7xl lg:mt-6">Fino al <span className="text-red-500 underline lg:text-8xl text-3xl md:text-6xl">50 %</span> <br /> di sconto</h2>
                            <p className="text-sm mt-1 md:text-2xl lg:text-4xl lg:mt-3">Sui tuoi look preferiti</p>
                            <Link to="/saldi">
                                <button type="button" className="bg-red-500 text-[#F6F4F0] p-1 rounded-md text-sm flex items-center gap-2 mt-2 md:mt-3 md:text-2xl lg:text-3xl lg:px-3 lg:py-2 lg:mt-7 cursor-pointer transition-transform lg:hover:scale-110 lg:hover:translate-x-4 duration-300 ease-in-out">
                                    <p>Scopri di più</p>
                                    <HiArrowLongRight />
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>

            
        </>
    );
}

export default BannerSaldiEstivi;

