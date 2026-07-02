import { NavLink, Link } from "react-router-dom";
import { PiTShirtFill } from "react-icons/pi";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <>
      <footer className="flex justify-center bg-[#F6F4F0] text-[#211D1A] text-[0.875rem] font-text p-10">
        <div className="flex items-center flex-col gap-8">
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="flex flex-col items-center gap-2">
              <Link>
                <h2 className="text-[1.5rem] font-title  font-semibold">TSHORT</h2>
              </Link>
              <p className="text-balance">
                Abbigliamento moderno per uomo, donna e bambino. Qualità curata, design essenziale, prezzi accessibili.
              </p>
              <div>
                <div className="flex flex-col items gap-2">
                  <ul className="flex gap-1 text-[1.2rem]">
                    <li>
                      <a href="" className="hover:text-[#C47048] ">
                        <IoLogoFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-[#C47048] ">
                        <AiFillInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[1.2rem] font-title font-semibold">Negozio</h4>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <NavLink to="/catalogo" className="hover:text-[#C47048]">
                        Catalogo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-donna" className="hover:text-[#C47048]">
                        Abbigliamento Donna
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-uomo" className="hover:text-[#C47048]">
                        Abbigliamento Uomo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-bambini" className="hover:text-[#C47048]">
                        Abbigliamento Bambini
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/nuovi-arrivi" className="hover:text-[#C47048]">
                        Nuovi Arrivi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/saldi" className="hover:text-[#C47048]">
                        Saldi
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[1.2rem] font-title  font-semibold">Assistenza</h4>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <NavLink to="/catalogo" className="hover:text-[#C47048]">
                        Catalogo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-donna" className="hover:text-[#C47048]">
                        Spedizioni
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-uomo" className="hover:text-[#C47048]">
                        Resi e cambi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-bambini" className="hover:text-[#C47048]">
                        Guida alle taglie
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/nuovi-arrivi" className="hover:text-[#C47048]"></NavLink>
                    </li>
                    <li>
                      <NavLink to="/saldi" className="hover:text-[#C47048]">
                        FAQ
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-[1.2rem] font-title  font-semibold">Azienda</h4>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <NavLink to="/catalogo" className="hover:text-[#C47048]">
                        Chi Siamo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-donna" className="hover:text-[#C47048]">
                        Sostenibilità
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-uomo" className="hover:text-[#C47048]">
                        Lavora con noi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-bambini" className="hover:text-[#C47048]">
                        Dove trovarci
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/nuovi-arrivi" className="hover:text-[#C47048]">
                        Press
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2 ">
                  <h4 className="text-[1.2rem] font-title  font-semibold">Contatti</h4>
                  <ul className="flex flex-col gap-1">
                    <li className="hover:text-[#C47048]">
                      <a href="">Telefono: +39 3030064648</a>
                    </li>
                    <li className="hover:text-[#C47048]">
                      <a href="">Email: info@thsort.it</a>
                    </li>
                    <li className="hover:text-[#C47048]">
                      <a href="">Indirizzo: Via Peppino 38 (LI)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr className="text-[#211D1A] w-full" />

          <div className="flex flex-col items-center w-full justify-between text-center gap-8">
            <div className="flex flex-row gap-16">
              <div>
                <ul className="flex flex-col gap-1">
                  <li className="hover:text-[#C47048]">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="hover:text-[#C47048]">
                    <Link to="/termini-condizioni">Termini e Condizioni</Link>
                  </li>
                  <li className="hover:text-[#C47048]">
                    <Link to="/cookies">Cookies</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <p className="text-xs tracking-wide">&copy; 2026 TShort. Tutti i diritti riservati. P.IVA 12345678901</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
