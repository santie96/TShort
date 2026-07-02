import { PiTShirtFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="relative w-full h-20 bg-slate-800 flex items-center">
                <div className="relative flex items-center justify-between px-10 w-full">
                    <div>
                        <NavLink className="flex items-center gap-3 text-slate-100 text-[2rem]">
                            <PiTShirtFill />
                            <span className="font-semibold">TShort</span>
                        </NavLink>
                    </div>

                    <div className="group">
                        <RxHamburgerMenu
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className="relative z-[60] text-slate-100 text-[2rem] cursor-pointer transition-transform duration-300 group-hover:scale-110"
                        />

                        <div
                            className={`absolute top-16 right-0 z-50 w-60 h-60 bg-slate-700 rounded-b-2xl flex justify-center transition-all duration-300 ease-in-out ${isMenuOpen
                                    ? "translate-x-0 opacity-100"
                                    : "translate-x-full opacity-0 pointer-events-none"
                                }`}
                        >
                            <ul className="flex flex-col items-center justify-evenly w-full text-slate-200 font-medium">
                                <li className="w-full h-full">
                                    <NavLink
                                        className="hover:bg-slate-600 w-full h-full flex items-center justify-center"
                                        to="/catalogo"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Catalogo
                                    </NavLink>
                                </li>

                                <li className="w-full h-full">
                                    <NavLink
                                        className="hover:bg-slate-600 w-full h-full flex items-center justify-center"
                                        to="/abbigliamento-uomo"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Uomo
                                    </NavLink>
                                </li>

                                <li className="w-full h-full">
                                    <NavLink
                                        className="hover:bg-slate-600 w-full h-full flex items-center justify-center"
                                        to="/abbigliamento-donna"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Donna
                                    </NavLink>
                                </li>

                                <li className="w-full h-full">
                                    <NavLink
                                        className="hover:bg-slate-600 w-full h-full flex items-center justify-center"
                                        to="/abbigliamento-bambini"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Bambini
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>


        {/* Visualizzazione per Mobile */ }
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
            </header >


        </>

    )
}

export default Navbar