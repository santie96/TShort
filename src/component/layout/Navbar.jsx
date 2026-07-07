import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";




function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const hasSearchText = searchQuery.trim().length > 0;

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
                    <div className="flex items-center justify-between px-5 py-4 w-full">

                        {/* Menu Navigazione Mobile - sm e md */}
                        <div className="group max-md:flex min-[821px]:hidden items-center">
                            <button onClick={() => setIsMenuOpen(valore => !valore)} className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer">
                                <RxHamburgerMenu
                                    className="z-50 text-[#211D1A] text-icon-size"
                                />
                            </button>


                        </div>

                        {/* Logo - ALL Breack Point */}
                        <div>
                            <NavLink to="/" className="flex items-center gap-3 text-slate-100">
                                <h2 className="text-logo-size font-semibold text-[#211D1A] font-title">TSHORT</h2>
                            </NavLink>
                        </div>

                        {/* Menu Navigazione Desktop - > lg */}
                        <div className="max-[821px]:hidden flex">
                            <ul className="flex items-center w-full gap-10 text-slate-200 font-medium font-text text-size">
                                <li>
                                    <NavLink
                                        className="text-[#211D1A] hover:text-[#C47048] duration-300"
                                        to="/catalogo"
                                    >
                                        Catalogo
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="text-[#211D1A] hover:text-[#C47048] duration-300"
                                        to="/abbigliamento-uomo"
                                    >
                                        Uomo
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="text-[#211D1A] hover:text-[#C47048] duration-300"
                                        to="/abbigliamento-donna"
                                    >
                                        Donna
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="text-[#211D1A] hover:text-[#C47048] duration-300"
                                        to="/abbigliamento-bambini"
                                    >
                                        Bambini
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-[#211D1A] hover:text-[#C47048] duration-300"
                                        to="/nuovi-arrivi"
                                    >
                                        Nuovi arrivi
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="text-red-600 hover:text-red-500 duration-300"
                                        to="/saldi"
                                    >
                                        Saldi
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* Icone: Search e Carrello - ALL Breack Point */}
                        <div className="flex gap-1 text-icon-size">
                            <button className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer" onClick={() => setSearchOpen(valore => !valore)}>
                                <IoSearch className="text-[#211D1A]" />
                            </button>

                            <button className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer text-[#211D1A]" onClick={() => setCartOpen(valore => !valore)}>
                                <MdOutlineShoppingCart />
                            </button>



                        </div>
                    </div >
                </div>
            </header >

            {/* Barra di riceraca */}
            <div
                className={`overflow-hidden bg-[#F6F4F0] transition-all duration-300 ease-in-out ${isSearchOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
            >
                <form className="relative bg-[#F6F4F0]" action="">
                    <input
                        className="w-full py-4 px-7 pr-12 border-t-2 focus:outline-none focus:ring-0 border-t-[#DDDAD5]"
                        type="text"
                        name="Serach"
                        id="GlobalSearch"
                        placeholder="Ricerca capi"
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}
                    />

                    <button
                        type="button"
                        onClick={() => setSearchQuery("")}
                        className={`absolute right-4 text-icon-size top-1/2 -translate-y-1/2 cursor-pointer text-[#211D1A] transition-opacity duration-200 ${hasSearchText ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                        aria-label="Cancella ricerca"
                    >
                        <MdOutlineDeleteSweep />
                    </button>
                </form>
            </div>

            {/* Barra di Menu Mobile */}
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
                        <button className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer text-[#211D1A]" onClick={() => setIsMenuOpen(false)}>
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

                <div className="p-6 fixed bottom-0 font-text text-size border-t w-full border-[#DDDAD5]">
                    <button className="flex items-center gap-2 cursor-pointer text-[#211D1A]">
                        <FiUser />
                        <NavLink to="/utente" onClick={() => setIsMenuOpen(false)}>Utente</NavLink>
                    </ button>


                </div>
            </div>


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
                        <button className="p-2 hover:bg-[#EAE7E2] duration-300 text-icon-size rounded-full cursor-pointer text-[#211D1A]" onClick={() => setCartOpen(false)}>
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
                            <button className="text-[#EAE7E2] mt-4 cursor-pointer rounded-md p-2 text-size bg-[#23201D] ">Continua lo shopping</button>

                        </div>
                    </div>

                </div>

            </div>



        </>

    )
}

export default Navbar