import Info from "./Contatti-Components/Info";
import Form from "./Contatti-Components/Form";
import Social from "./Contatti-Components/Mappa";

function Contatti() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui gestirai l'invio del form (es. API, Formspree, EmailJS, ecc.)
    /*   alert("Messaggio inviato con successo!"); */
  };

  return (
    <>
      <main className="bg-[#FDFCF9] text-[#211D1A] min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-7">
            <h1 className="font-bold font-title text-title-page-size">Contattaci</h1>
            <p className="font-text font-semibold text-balance text-center text-size">
              Hai domande sui nostri prodotti, sulle spedizioni o desideri ricevere assistenza? Il nostro team è a tua
              completa disposizione.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Info />
            <Form onSubmit={handleSubmit} />
          </div>
        </div>
      </main>
    </>
  );
}

export default Contatti;
