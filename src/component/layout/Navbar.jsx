import { PiTShirtFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <header className="w-full h-20 bg-slate-800 flex items-center ">
                <div className="flex items-center justify-evenly">
                    <div>
                        <NavLink>
                            <PiTShirtFill />
                        </NavLink>
                    </div>

                    <nav>
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
                    </nav>
                </div>
            </header>


        </>

    )
}

export default Navbar