import { NavLink, Link } from "react-router-dom";
import { PiTShirtFill } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <>
      <footer className="bg-[#F6F4F0] text-[#211D1A] text-[0.875rem] font-text p-7">
        {/* CONTIENE TUTTO */}
        <div className="flex items-center flex-col gap-6">
          {/* SECTION 1 */}
          <section className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 md:gap-x-12 md:gap-y-10 lg:grid-cols-4  w-full">
            {/* LOGO E SOCIAL */}
            <div className="flex flex-col items-center gap-2 text-center  md:items-center md:text-center">
              <Link>
                {/* LOGO */}
                <h2 className="text-[1.5rem] font-title font-semibold">TSHORT</h2>
              </Link>
              <p className="text-balance max-w-70">
                Abbigliamento moderno per uomo, donna e bambino. Qualità curata, design essenziale, prezzi accessibili.
              </p>
              {/* SOCIAL */}
              <ul className="flex gap-2 text-[1.8rem] md:mt-1">
                <li className="group">
                  <a href="" className=" hover:text-[#C47048]  ">
                    <CiFacebook className="duration-300 transition-transform group-hover:scale-120" />
                  </a>
                </li>
                <li className="group">
                  <a href="" className="hover:text-[#C47048]">
                    <CiInstagram className="duration-300 transition-transform group-hover:scale-120" />
                  </a>
                </li>
              </ul>
            </div>

            {/* NEGOZIO */}
            <div className="hidden flex-col gap-1.5 md:flex md:items-center">
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

            {/* ASSISTENZA */}
            <div className="flex flex-col gap-1.5 items-center md:items-center">
              <h4 className="text-[1.2rem] font-title font-semibold">Assistenza</h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <NavLink to="/spedizioni" className="hover:text-[#C47048]">
                    Spedizioni
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/resi-cambi" className="hover:text-[#C47048]">
                    Resi e cambi
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/guida-taglie" className="hover:text-[#C47048]">
                    Guida alle taglie
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contatti" className="hover:text-[#C47048]">
                    Contatti
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/faq" className="hover:text-[#C47048]">
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* AZIENDA */}
            <div className="flex flex-col gap-1.5 items-center md:items-center">
              <h4 className="text-[1.2rem] font-title font-semibold">Azienda</h4>
              <ul className="flex flex-col gap-1">
                <li>
                  <NavLink to="/chi-siamo" className="hover:text-[#C47048]">
                    Chi Siamo
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sostenibilita" className="hover:text-[#C47048]">
                    Sostenibilità
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/lavora-con-noi" className="hover:text-[#C47048]">
                    Lavora con noi
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dove-trovarci" className="hover:text-[#C47048]">
                    Dove trovarci
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/press" className="hover:text-[#C47048]">
                    Press
                  </NavLink>
                </li>
              </ul>
            </div>
          </section>

          {/* DIVISORE */}
          <hr className="text-[#DDDAD5] w-full" />

          {/* SECTION 2 */}
          <section className="flex flex-col items-center w-full justify-between text-center gap-8 md:flex-row">
            <div className="flex flex-row gap-16 md:order-2">
              <div>
                <ul className="flex flex-col gap-1 md:flex-row md:gap-5">
                  <li className="hover:text-[#C47048]">
                    <Link to="/privacy">Privacy</Link>
                  </li>
                  <li>
                    <Link to="/termini-condizioni">Termini e Condizioni</Link>
                  </li>
                  <li className="hover:text-[#C47048]">
                    <Link to="/cookies">Cookies</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center md:order-1">
              <p className="text-xs tracking-wide">&copy; 2026 TShort. Tutti i diritti riservati.</p>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
export default Footer;
