function Form({ onSubmit }) {
  return (
    <>
      <section className="bg-[#F6F4F0] grid font-text text-left gap-3 p-7 rounded-2xl">
        <h2 className="font-title font-bold text-title-size mb-4">Invia un messaggio</h2>
        <form onSubmit={onSubmit} className="flex flex-col text-left gap-2 text-stitle-size">
          <div className="flex flex-col gap-2 text-left">
            <label htmlFor="name" className="uppercase text-size">
              Nome Completo
            </label>
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
            <label htmlFor="email" className="uppercase text-size">
              Indirizzo Email
            </label>
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
            <label htmlFor="subject" className="uppercase text-size">
              Oggetto
            </label>
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
            <label htmlFor="message" className="uppercase text-size">
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
            className="bg-[#23201D] text-[#FAF8F4] text-stitle-size font-text hover:bg-[#C47048] transition-colors duration-300 cursor-pointer rounded-2xl px-4 py-4 mb-4"
            type="submit"
          >
            Invia Messaggio
          </button>
        </form>
      </section>
    </>
  );
}

export default Form;
