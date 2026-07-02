import "./App.css";
import Layout from "./component/layout/Layout";
import Home from "./component/pages/Home";
import Catalogo from "./component/pages/Catalogo";
import ABambini from "./component/pages/ABambini";
import AUomo from "./component/pages/AUomo";
import ADonna from "./component/pages/ADonna";
import Carrello from "./component/pages/Carrello";
import Contatti from "./component/pages/Contatti";
import About from "./component/pages/About";
import Cookies from "./component/pages/Cookies";
import PrivacyPolicy from "./component/pages/PrivacyPolicy";
import TerminiCondizioni from "./component/pages/TerminiCondizioni";
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
        <Route path="carrello" element={<Carrello />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="about" element={<About />} />
        <Route path="cookies" element={<Cookies />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="termini-condizioni" element={<TerminiCondizioni />} />
      </Route>
    </Routes>
  );
}

export default App;
