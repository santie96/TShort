import { PiTShirtFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdOutlineDeleteSweep } from "react-icons/md";
import SideBarMenu from "./Navbar-Components/SideBarMenu";
import SideBarCart from "./Navbar-Components/SideBarCart";
import SearchBar from "./Navbar-Components/SearchBar";
import { Link } from "react-router-dom";




function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    return (
        <>



            <section className="w-full text-center">
                <div className="bg-[#211D1A] py-2">
                    <p className="text-[#F6F4F0] font-text text-[0.75rem] w-full h-full m-0">Spedizione gratuita sopra i 49€ · Reso gratuito entro 30 giorni</p>
                </div>
            </section>


            <header className={`w-full z-20 bg-[#F6F4F0]/96 flex items-center sticky top-0 ${isScrolled ? 'border-b border-[#DDDAD5]' : 'border-b border-transparent'}`}>
                <div className="w-full h-full text-center">
                    <div className="flex items-center justify-between px-5 py-4 w-full">

                        {/* Menu Navigazione Mobile - sm e md */}
                        <div className="group max-md:flex min-[821px]:hidden items-center">
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(valore => !valore)}
                                className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer"
                            >
                                <RxHamburgerMenu
                                    className="z-50 text-[#211D1A] text-icon-size"
                                />
                            </button>
                        </div>

                        {/* Logo - ALL Breack Point */}
                        <div>
                            <NavLink to="/" className="flex items-center gap-3 text-slate-100">
                                <h2 className="text-logo-size font-semibold text-[#211D1A] font-title">VESTA</h2>
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
                            <Link to="/carrello">
                                <button
                                    type="button"
                                >
                                    Carrello
                                </button>
                            </Link>

                            <button className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer" onClick={() => setSearchOpen(valore => !valore)}>
                                <IoSearch className="text-[#211D1A]" />
                            </button>



                            <button
                                type="button"
                                className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer text-[#211D1A]"
                                onClick={() => setIsCartOpen(valore => !valore)}
                            >
                                <MdOutlineShoppingCart />
                            </button>

                            {/* Sidebar Cart */}
                            <SideBarCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

                        </div>
                    </div >
                </div>
            </header >

            <SearchBar
                isOpen={isSearchOpen}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                hasSearchText={hasSearchText}
            />

            <SideBarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <SideBarCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />



        </>

    )
}

export default Navbar