import { PiTShirtFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { PiMoonThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";



function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    useEffect(() => {
        document.body.style.overflow = isCartOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isCartOpen]);

    return (
        <>

            <section className="w-full text-center">
                <div className="bg-[#211D1A] py-2">
                    <p className="text-[#F6F4F0] font-text text-[0.75rem] w-full h-full m-0">Spedizione gratuita sopra i 49€ · Reso gratuito entro 30 giorni</p>
                </div>
            </section>
            <header className="w-full bg-[#F6F4F0] flex items-center sticky top-0 ">
                <div className="w-full h-full text-center">
                    <div>
                        <div className="flex items-center justify-between px-5 py-4 w-full">

                            <div className="group">
                                <button onClick={() => setIsMenuOpen(valore => !valore)} className="cursor-pointer">
                                    <RxHamburgerMenu
                                        className="z-50 text-[#211D1A] text-xl transition-transform duration-300 group-hover:scale-110"
                                    />
                                </button>

                                {isMenuOpen && (
                                    <div className="fixed inset-0 bg-black/30 z-40"></div>
                                )}

                                <div
                                    className={`fixed top-0 left-0 z-50 w-75 h-dvh bg-[#F6F4F0] flex flex-col transition-all duration-300 ease-in-out ${isMenuOpen
                                        ? "translate-x-0 opacity-100"
                                        : "-translate-x-full opacity-0 pointer-events-none"
                                        }`}
                                >
                                    <div className="flex items-center justify-between p-5">
                                        <div>
                                            <h2 className="font-semibold text-[#211D1A] font-title text-logo-size">TSHORT</h2>
                                        </div>
                                        <div className="flex gap-3 text-icon-size">
                                            <button className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                                <IoClose />
                                            </button>

                                        </div>
                                    </div>

                                    <hr className="text-[#DDDAD5]" />

                                    <ul className="flex flex-col items-start w-full px-4 pt-5 gap-3 text-slate-200 font-medium font-text text-size">
                                        <li className="w-full">
                                            <NavLink
                                                className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                                                to="/catalogo"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Catalogo
                                            </NavLink>
                                        </li>

                                        <li className="w-full">
                                            <NavLink
                                                className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                                                to="/abbigliamento-uomo"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Uomo
                                            </NavLink>
                                        </li>

                                        <li className="w-full">
                                            <NavLink
                                                className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                                                to="/abbigliamento-donna"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Donna
                                            </NavLink>
                                        </li>

                                        <li className="w-full">
                                            <NavLink
                                                className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                                                to="/abbigliamento-bambini"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Bambini
                                            </NavLink>
                                        </li>
                                        <li className="w-full">
                                            <NavLink
                                                className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                                                to="/nuovi-arrivi"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Nuovi arrivi
                                            </NavLink>
                                        </li>
                                        <li className="w-full">
                                            <NavLink
                                                className="text-red-600 hover:text-red-500 hover:bg-[#EAE7E2] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                                                to="/saldi"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                Saldi
                                            </NavLink>
                                        </li>
                                    </ul>

                                    <div className="p-6 fixed bottom-0 flex flex-col gap-3 font-text text-size border-t w-full border-[#DDDAD5]">
                                        <div className="flex items-center gap-2 cursor-pointer">
                                            <FiUser />
                                            <NavLink to="/utente" onClick={() => setIsMenuOpen(false)}>Utente</NavLink>
                                        </div>
                                        <div className="flex items-center gap-2 cursor-pointer">
                                            <FaRegHeart className="cursor-pointer" />
                                            <NavLink to="/preferiti" onClick={() => setIsMenuOpen(false)}>Preferiti</NavLink>
                                        </div>



                                    </div>
                                </div>
                            </div>

                            <div>
                                <NavLink to="/" className="flex items-center gap-3 text-slate-100">
                                    <h2 className="text-logo-size font-semibold text-[#211D1A] font-title">TSHORT</h2>
                                </NavLink>
                            </div>

                            <div className="flex gap-1 text-icon-size">
                                <button className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer" >
                                    <IoSearch />
                                </button>
                                <button className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer" >
                                    <FaRegHeart />
                                </button>
                                <button className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer" onClick={() => setCartOpen(valore => !valore)}>
                                    <MdOutlineShoppingCart />
                                </button>

                                {isCartOpen && (
                                    <div className="fixed inset-0 bg-black/30 z-40"></div>
                                )}

                                <div className={`fixed top-0 right-0 z-50 w-85 h-dvh bg-[#F6F4F0] flex flex-col transition-all duration-300 ease-in-out ${isCartOpen
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-full opacity-0 pointer-events-none"
                                    }`}>


                                    <div className="flex flex-col flex-1 min-h-0">
                                        <div className="flex w-full justify-between p-6 font-title border border-[#DDDAD5]">
                                            <h3 className="text-title-size">Carrello</h3>
                                            <button className="p-2 hover:bg-[#EAE7E2] duration-300 text-icon-size rounded-full cursor-pointer" onClick={() => setCartOpen(false)}>
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
                                                <button className="text-[#EAE7E2] mt-4 rounded-md p-2 text-size bg-[#23201D]">Continua lo shopping</button>
                                                
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div >
                    </div>
                </div>
            </header >


        </>

    )
}

export default Navbar