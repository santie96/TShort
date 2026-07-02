import { PiTShirtFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { PiMoonThin } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoClose } from "react-icons/io5";


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="relative w-full bg-[#F6F4F0] flex items-center">
                <div className="w-full h-full text-center">
                    <div className="bg-[#211D1A] py-2">
                        <p className="text-[#F6F4F0] font-text text-[0.75rem] w-full h-full m-0">Spedizione gratuita sopra i 49€ · Reso gratuito entro 30 giorni</p>
                    </div>
                    <div className=" flex items-center justify-between px-5 py-4 w-full">

                        <div className="group">
                            <RxHamburgerMenu
                                onClick={() => setIsMenuOpen(prev => !prev)}
                                className="z-50 text-[#211D1A] text-xl cursor-pointer transition-transform duration-300 group-hover:scale-110"
                            />

                            <div
                                className={`absolute top-0 left-0 z-50 w-75 h-dvh bg-[#F6F4F0] rounded-b-2xl flex flex-col transition-all duration-300 ease-in-out ${isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "-translate-x-full opacity-0 pointer-events-none"
                                    }`}
                            >
                                <div className="flex items-center justify-between p-5">
                                    <div>
                                        <h2 className="font-semibold text-[#211D1A] font-title text-2xl">TSHORT</h2>
                                    </div>
                                    <div className="flex gap-3 text-xl">
                                        <PiMoonThin className="cursor-pointer" />
                                        <IoClose className="cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                                    </div>
                                </div>

                                <hr className="text-gray-400" />

                                <ul className="flex flex-col items-start w-full px-4 pt-8 gap-9 text-slate-200 font-medium">
                                    <li>
                                        <NavLink
                                            className="text-[#211D1A] hover:bg-slate-600 flex items-center justify-center"
                                            to="/catalogo"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Catalogo
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            className="text-[#211D1A] hover:bg-slate-600 flex items-center justify-center"
                                            to="/abbigliamento-uomo"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Uomo
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            className="text-[#211D1A] hover:bg-slate-600 flex items-center justify-center"
                                            to="/abbigliamento-donna"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Donna
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink
                                            className="text-[#211D1A] hover:bg-slate-600 flex items-center justify-center"
                                            to="/abbigliamento-bambini"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Bambini
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            className="hover:bg-slate-600 text-red-600 flex items-center justify-center"
                                            to="/saldi"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Saldi
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <NavLink className="flex items-center gap-3 text-slate-100">
                                <h2 className="text-[1.5rem] font-semibold text-[#211D1A] font-title">TSHORT</h2>
                            </NavLink>
                        </div>

                        <div className="flex gap-4 text-xl">
                            <IoSearch className="cursor-pointer" />
                            <PiMoonThin className="cursor-pointer" />
                            <FaRegHeart className="cursor-pointer" />
                            <MdOutlineShoppingCart className="cursor-pointer" />
                        </div>


                        {/* Visualizzazione per Mobile */}
                        {/* <nav>
                        <ul className="flex ">
                            <li>
                                <NavLink to="/catalogo">Catalogo</NavLink>
                            </li>
                            <li>
                                <NavLink to="/abbigliamento-uomo">Uomo</NavLink>
                            </li>
                            <li>
                                <NavLink to="/abbigliamento-donna">Donna</NavLink>
                            </li>
                            <li>
                                <NavLink to="/abbigliamento-bambini">Bambini</NavLink>
                            </li>
                        </ul>
                    </nav> */}
                    </div >
                </div>
            </header >


        </>

    )
}

export default Navbar