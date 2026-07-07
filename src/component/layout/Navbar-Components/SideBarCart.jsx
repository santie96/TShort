import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";



function SideBarCart({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}></div>
            )}

            <div className={`fixed top-0 right-0 z-50 w-[20rem] md:w-[30rem] lg:w-[35rem] h-dvh bg-[#F6F4F0] flex flex-col transition-all duration-300 ease-in-out ${isOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 pointer-events-none"
                }`}>


                <div className="flex flex-col flex-1 min-h-0">
                    <div className="flex w-full justify-between p-6 font-title border border-[#DDDAD5]">
                        <h3 className="text-title-size">Carrello</h3>
                        <button
                        type="button"
                        className="p-2 hover:bg-[#EAE7E2] duration-300 text-icon-size rounded-full cursor-pointer text-[#211D1A]" onClick={onClose}>
                            <IoClose />
                        </button>
                    </div>

                    <div className="font-text w-full flex-1 flex justify-center items-center">
                        <div className="flex flex-col items-center">

                            <div className="p-6 bg-[#EAE7E2] duration-300 rounded-full w-max inline-flex items-center justify-center">
                                <FiShoppingBag className="text-[2rem] text-[#6E6862]" />
                            </div>
                            <h5 className="mt-4 text-center font-medium text-stitle.size">Il tuo carrello è vuoto</h5>
                            <p className="mt-1 text-size">Aggiungi i tuoi capi preferiti per iniziare</p>
                            <button 
                            type="button"
                            className="text-[#EAE7E2] hover:bg-[#C47048] mt-4 cursor-pointer rounded-md p-2 text-size bg-[#23201D] hover:scale-110 transition-all duration-500" 
                            onClick={onClose}>
                                <NavLink to="/catalogo">Continua lo shopping</NavLink>
                            </button>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )

}

export default SideBarCart