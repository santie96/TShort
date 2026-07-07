import { NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

function SideBarMenu({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose}></div>
            )}

            <div
                className={`fixed top-0 left-0 z-50 w-75 h-dvh bg-[#F6F4F0] flex flex-col transition-all duration-300 ease-in-out ${isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex items-center justify-between p-5">
                    <div>
                        <NavLink 
                        className="font-semibold text-[#211D1A] font-title text-logo-size"
                        to="/"
                        onClick={onClose} 
                        >TSHORT</NavLink>
                    </div>
                    <div className="flex gap-3 text-icon-size">
                        <button
                            type="button"
                            className="p-2 hover:bg-[#EAE7E2] duration-300 rounded-full cursor-pointer text-[#211D1A]"
                            onClick={onClose}
                        >
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
                            onClick={onClose}
                        >
                            Catalogo
                        </NavLink>
                    </li>

                    <li className="w-full">
                        <NavLink
                            className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                            to="/abbigliamento-uomo"
                            onClick={onClose}
                        >
                            Uomo
                        </NavLink>
                    </li>

                    <li className="w-full">
                        <NavLink
                            className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                            to="/abbigliamento-donna"
                            onClick={onClose}
                        >
                            Donna
                        </NavLink>
                    </li>

                    <li className="w-full">
                        <NavLink
                            className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                            to="/abbigliamento-bambini"
                            onClick={onClose}
                        >
                            Bambini
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            className="text-[#211D1A] hover:bg-[#EAE7E2] hover:text-[#C47048] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                            to="/nuovi-arrivi"
                            onClick={onClose}
                        >
                            Nuovi arrivi
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink
                            className="text-[#D33B36] hover:text-[#F6F4F0] hover:bg-[#D33B36] p-4 rounded-xl w-full flex items-center justify-start duration-300"
                            to="/saldi"
                            onClick={onClose}
                        >
                            Saldi
                        </NavLink>
                    </li>
                </ul>

                <div className="p-6 fixed bottom-0 font-text text-size border-t w-full border-[#DDDAD5]">
                    <div className="flex items-center gap-2 cursor-pointer text-[#211D1A]">
                        <FiUser />
                        <NavLink to="/utente" onClick={onClose}>Utente</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SideBarMenu;