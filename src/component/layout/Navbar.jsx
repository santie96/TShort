import { PiTShirtFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            <header className="w-full h-20 bg-slate-800 flex items-center ">
                <div className="flex items-center justify-between px-10 w-full">
                    <div>
                        <NavLink className="flex items-center gap-3 text-slate-100 text-[2rem]">
                            <PiTShirtFill />
                            <span className="font-semibolf">TShort</span>
                        </NavLink>
                    </div>

                    <div className="group">
                        <RxHamburgerMenu onClick={() => setIsMenuOpen (valore => !valore)} className="text-slate-100 text-[1.5rem] cursor-pointer z-20 transition-transform duration-300 group-hover:scale-110"/>

                            <div className={`absolute top-20 right-0 w-60 h-60 bg-slate-700 rounded-b-2xl flex justify-center transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}>
                                <ul>
                                    <li>
                                        <NavLink to="/" onClick={() => setIsMenuOpen (false)}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/catalogo" onClick={() => setIsMenuOpen (false)}>Catalogo</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/abbigliamento-uomo" onClick={() => setIsMenuOpen (false)}>Uomo</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/abbigliamento-donna" onClick={() => setIsMenuOpen (false)}>Donna</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/abbigliamento-bambini" onClick={() => setIsMenuOpen (false)}>Bambini</NavLink>
                                    </li>
                                </ul>
                            </div>
                        
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
                </div>
            </header>


        </>

    )
}

export default Navbar