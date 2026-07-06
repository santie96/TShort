import { NavLink, Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMapPin } from "react-icons/ci";

function Contatti() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui gestirai l'invio del form (es. API, Formspree, EmailJS, ecc.)
    alert("Messaggio inviato con successo!");
  };

  return (
    <>
      <main className="bg-[#FDFCF9] min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-7">
            <h1>Contattaci</h1>
            <p className="text-balance text-center">
              Hai domande sui nostri prodotti, sulle spedizioni o desideri ricevere assistenza? Il nostro team è a tua
              completa disposizione.
            </p>
          </div>
          <section className="bg-[#F6F4F0] mb-7 text-left">
            <div>
              <div className="text-left">
                <h1>Informazioni</h1>
                <p>Scegli come preferisci contattarci.</p>
              </div>
              <ul>
                <li>
                  <div>
                    <CiMail />
                  </div>
                  <div>
                    <h3>Scrivici una email</h3>
                    <a href="">info@tshort.it</a>
                  </div>
                </li>
                <li>
                  <div>
                    <CiPhone />
                  </div>
                  <div>
                    <h3>Chiamaci</h3>
                    <a href="">+39 0123 456789</a>
                  </div>
                </li>
                <li>
                  <div>
                    <CiMapPin />
                  </div>
                  <div>
                    <h3>Sede legale</h3>
                    <p>Via dell'Essenziale, 42 57120 Livorno (LI) - Italia</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="bg-[#F6F4F0] grid text-left gap-3">
            <h3>Invia un messaggio</h3>
            <form action="" className="flex flex-col items-center gap-2 text-center">
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="name">Nome Completo</label>
                <input id="name" required placeholder="Mario Rossi" className="bg-[#FDFCF9]" />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="email">Indirizzo Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="mario.rossi@esempio.com"
                  className="bg-[#FDFCF9]"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="subject">Oggetto</label>
                <input
                  type="text"
                  id="subject"
                  required
                  placeholder="Es: Informazioni sulla spedizione"
                  className="bg-[#FDFCF9]"
                />
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label htmlFor="message">Messaggio</label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="Scrivi qui il tuo messaggio..."
                  className="bg-[#FDFCF9]"
                />
              </div>
              <button className="bg-amber-600" type="submit">
                Invia Messaggio
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}

export default Contatti;
