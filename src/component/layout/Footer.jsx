import { NavLink, Link } from "react-router-dom";
import { PiTShirtFill } from "react-icons/pi";

function Footer() {
  return (
    <>
      <footer className="bg-slate-800 text-white p-10">
        <div className="flex flex-col gap-8 items-center text-center">
          <div className="flex flex-col items-center gap-1">
            <Link>
              <PiTShirtFill className="text-5xl" />
            </Link>
            <h2 className="text-3xl">TSHORT</h2>
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
                  <NavLink to="/abbigliamento-donna">Abbigliamento Donna</NavLink>
                  <NavLink to="/abbigliamento-uomo">Abbigliamento Uomo</NavLink>
                  <NavLink to="/abbigliamento-bambini">Abbigliamento Bambini</NavLink>
                  <NavLink to="/">Home</NavLink>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl"></h4>
                <ul className="flex flex-col gap-1">
                  <a to="/cookies">Facebook</a>
                  <a to="/about">Instagram</a>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col gap-2">
                <h4 className="text-2xl"></h4>
                <ul className="flex flex-col gap-1">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                  <Link to="/termini-condizioni">Termini e Condizioni</Link>
                  <Link to="/cookies">Cookies</Link>
                  <Link to="/about">About</Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
