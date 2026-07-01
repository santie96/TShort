import { PiTShirtFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <header className="">
                <div>
                    <NavLink>
                        <PiTShirtFill />
                    </NavLink>
                </div>
                <nav>
                    <ul>
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
            </header>


        </>

    )
}

export default Navbar