import "./App.css";
import Layout from "./component/layout/Layout";
import Home from "./component/pages/Home";
import Catalogo from "./component/pages/Catalogo";
import ABambini from "./component/pages/ABambini";
import AUomo from "./component/pages/AUomo";
import ADonna from "./component/pages/ADonna";
import NuoviArrivi from "./component/pages/NuoviArrivi";
import Saldi from "./component/pages/Saldi";
import Carrello from "./component/pages/Carrello";
import Contatti from "./component/pages/Contatti";
import About from "./component/pages/About";
import Cookies from "./component/pages/Cookies";
import Privacy from "./component/pages/Privacy";
import TerminiCondizioni from "./component/pages/TerminiCondizioni";
import Preferiti from "./component/pages/Preferiti";
import Utente from "./component/pages/Utente";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="abbigliamento-bambini" element={<ABambini />} />
        <Route path="abbigliamento-uomo" element={<AUomo />} />
        <Route path="abbigliamento-donna" element={<ADonna />} />
        <Route path="nuovi-arrivi" element={<NuoviArrivi />} />
        <Route path="saldi" element={<Saldi />} />
        <Route path="carrello" element={<Carrello />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="about" element={<About />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="termini-condizioni" element={<TerminiCondizioni />} />
        <Route path="preferiti" element={<Preferiti />} />
        <Route path="utente" element={<Utente />} />
      </Route>
    </Routes>
  );
}

export default App;
