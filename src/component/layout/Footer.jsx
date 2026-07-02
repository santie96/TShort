import { NavLink, Link } from "react-router-dom";
import { PiTShirtFill } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer className="flex justify-center bg-[#2B2B2B] text-[#f3f0e9] p-10">
        <div className="flex items-center flex-col gap-8">
          <div className="flex flex-col gap-8 items-center text-center">
            <div className="flex flex-col items-center">
              <Link>
                <PiTShirtFill className="text-5xl text-[#8DAA91]" />
              </Link>
              <h2 className="text-3xl text-[#444141]">TSHORT</h2>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl">Contatti</h4>
                <ul className="flex flex-col gap-1">
                  <li>Telefono: +39 3030064648</li>
                  <li>Email: info@thsort.it</li>
                  <li>Indirizzo: Via Peppino 38 (LI)</li>
                </ul>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl">Categorie</h4>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <NavLink to="/catalogo" className="hover:text-[#8daa91]">
                        Catalogo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-donna" className="hover:text-[#8daa91]">
                        Abbigliamento Donna
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-uomo" className="hover:text-[#8daa91]">
                        Abbigliamento Uomo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/abbigliamento-bambini" className="hover:text-[#8daa91]">
                        Abbigliamento Bambini
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-2xl">I Nostri Social</h4>
                  <ul className="flex flex-col gap-1">
                    <li>
                      <a href="" className="hover:text-[#8daa91]">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="" className="hover:text-[#8daa91]">
                        Instagram
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-t border-slate-100 w-full" />
          <div className="flex flex-col items-center w-full justify-between text-center gap-8">
            <div className="flex gap-2">
              <ul className="flex flex-col gap-1">
                <li className="hover:text-[#8daa91]">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="hover:text-[#8daa91]">
                  <Link to="/termini-condizioni">Termini e Condizioni</Link>
                </li>
                <li className="hover:text-[#8daa91]">
                  <Link to="/cookies">Cookies</Link>
                </li>
                <li className="hover:text-[#8daa91]">
                  <Link to="/about">About</Link>
                </li>
              </ul>
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
