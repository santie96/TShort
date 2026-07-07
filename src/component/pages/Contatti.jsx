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
      <main className="bg-[#FDFCF9] text-[#211D1A] min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-7">
            <h1 className="text-title-page-size">Contattaci</h1>
            <p className="text-balance text-center text-size">
              Hai domande sui nostri prodotti, sulle spedizioni o desideri ricevere assistenza? Il nostro team è a tua
              completa disposizione.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <section className="bg-[#F6F4F0]  text-left p-7 rounded-2xl ">
              <div className="mb-5">
                <h2 className="text-title-size">Informazioni</h2>
                <p className="text-size">Scegli come preferisci contattarci.</p>
              </div>

              <ul className="flex flex-col gap-8">
                <li className="flex items-center gap-6">
                  <div className="bg-[#FDFCF9] p-2 rounded-4xl text-[#C47048] text-xl shrink-0">
                    <CiMail className="text-icon-main shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-stitle-size font-semibold">Scrivici una email</h4>
                    <a
                      href="mailto:info@tshort.it"
                      className="underline decoration-transparent hover:decoration-[#C47048] transition-colors duration-300"
                    >
                      info@tshort.it
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <div className="bg-[#FDFCF9] p-2 rounded-4xl text-[#C47048] text-xl shrink-0">
                    <CiPhone className="text-icon-main shrink-0 font-" />
                  </div>
                  <div>
                    <h4 className="text-stitle-size font-semibold">Chiamaci</h4>
                    <a
                      href="tel:+390123456789"
                      className="underline decoration-transparent hover:decoration-[#C47048] transition-colors duration-300"
                    >
                      +39 0123 456789
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-6">
                  <div className="bg-[#FDFCF9] p-2 rounded-4xl text-[#C47048] text-xl shrink-0">
                    <CiMapPin className="text-icon-main shrink-0" />
                  </div>
                  <div>
                    <h4 className="text-stitle-size font-semibold">Sede legale</h4>
                    <a
                      href="https://maps.google.com/?q=Via+dell'Essenziale+42+Livorno"
                      className="underline decoration-transparent hover:decoration-[#C47048] transition-colors duration-300"
                    >
                      Via dell'Essenziale, 42 57120 Livorno (LI) - Italia
                    </a>
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-[#F6F4F0] grid text-left gap-3 p-7 rounded-2xl">
              <h2 className="text-title-size mb-4">Invia un messaggio</h2>
              <form onSubmit={handleSubmit} className="flex flex-col text-left gap-2 text-stitle-size">
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="name">Nome Completo</label>
                  <input
                    id="name"
                    required
                    placeholder="Mario Rossi"
                    className="bg-[#FDFCF9] px-4 py-3 mb-4 rounded-2xl
                    border-2 border-[#DDDAD5]
                     focus:outline-none focus:ring-2 focus:ring-[#C47048] transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="email">Indirizzo Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="mario.rossi@esempio.com"
                    className="bg-[#FDFCF9] px-4 py-3 mb-4 rounded-2xl
                    border-2 border-[#DDDAD5] focus:outline-none focus:ring-2 focus:ring-[#C47048] transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="subject">Oggetto</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Es: Informazioni sulla spedizione"
                    className="bg-[#FDFCF9] px-4 py-3 mb-4 rounded-2xl
                    border-2 border-[#DDDAD5] focus:outline-none focus:ring-2 focus:ring-[#C47048] transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label htmlFor="message" className="text-stitle-size">
                    Messaggio{" "}
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Scrivi qui il tuo messaggio..."
                    className="bg-[#FDFCF9] px-4 py-3 mb-4 rounded-2xl 
                    border-2 border-[#DDDAD5]
                   resize-none 
                   focus:outline-none focus:ring-2 focus:ring-[#C47048] transition-all duration-300"
                  />
                </div>
                <button
                  className="bg-[#23201D] text-[#FAF8F4] hover:bg-[#C47048] transition-colors duration-300 cursor-pointer rounded-2xl px-4 py-4 mb-4"
                  type="submit"
                >
                  Invia Messaggio
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contatti;
