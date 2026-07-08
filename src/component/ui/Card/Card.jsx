import { NavLink } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";


function Card() {

    return (
        <>
            <NavLink to="/abbigliamento-uomo" className="relative overflow-hidden rounded-xl">
                <div className="relative group aspect-[3/4] sm:aspect-[4/5]">
                    <img src="./src/img/categoria/men.webp" alt="immagine" className="w-full h-full object-cover block transition-all group-hover:scale-105 duration-700 ease-in-out" />
                    <div className="absolute bottom-0 flex items-end lg:p-5 w-full h-full inset-0 bg-[#191101]/10 justify-between">
                        <div className="text-[#F6F4F0]">
                            <h2 className="text-stitle-size font-semibold font-title">Pantalone</h2>
                            <p className="text-sm font-text">Essenziali versatili per ogni giorno</p>
                        </div>
                        <div className="p-2.5 bg-[#F6F4F0] group-hover:bg-[#C47048] group-hover:text-[#F6F4F0] duration-300 rounded-full cursor-pointer flex justify-center items-center">
                            <MdOutlineArrowOutward className="text-icon-size" />
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default Card