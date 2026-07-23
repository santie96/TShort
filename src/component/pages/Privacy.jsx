function Privacy() {
  /*   const lastUpdated = new Date().toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }); */

  return (
    <>
      <div className="bg-[#FDFCF9] min-h-screen text-center">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <header className="space-y-4">
            <h1 className="--font-title text-[#211D1A] text-4xl md:text-5xl">Privacy Policy</h1>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              Ultimo aggiornamento: 03 luglio 2026{/* {lastUpdated} */}
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Introduzione</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              VESTA ("noi", "il Servizio" o "la Piattaforma") rispetta la riservatezza dei propri utenti e si impegna a
              proteggere i dati personali trattati in occasione dell'utilizzo del servizio di creazione e gestione di
              link brevi. La presente Privacy Policy illustra le modalità di raccolta, utilizzo, conservazione e
              protezione dei dati personali degli utenti, in conformità al Regolamento (UE) 2016/679 (GDPR) e alla
              normativa nazionale applicabile in materia di protezione dei dati personali.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Titolare del trattamento</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              Il Titolare del trattamento dei dati personali raccolti tramite VESTA è la società che gestisce la
              piattaforma, con sede legale in Italia. Per qualsiasi richiesta relativa al trattamento dei dati
              personali, l'utente può contattare il Titolare scrivendo all'indirizzo email privacy@vesta.io, indicando
              in modo chiaro l'oggetto della richiesta.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Dati raccolti</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              Nell'ambito dell'erogazione del servizio, VESTA può raccogliere diverse categorie di dati personali, tra
              cui: dati identificativi e di contatto forniti in fase di registrazione (nome, cognome, indirizzo email);
              dati relativi all'account, come nome utente e password (memorizzata in forma crittografata); dati di
              navigazione e di utilizzo del servizio, tra cui gli URL accorciati creati, il numero di click ricevuti e
              le relative statistiche aggregate; dati tecnici quali indirizzo IP, tipo di browser e dispositivo
              utilizzato, raccolti automaticamente durante la navigazione. Non vengono raccolte categorie particolari di
              dati personali, salvo che l'utente stesso decida di inserirle volontariamente all'interno dei contenuti
              collegati ai propri link brevi, nel qual caso se ne assume la piena responsabilità.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Finalità del trattamento</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              I dati personali raccolti sono trattati per le seguenti finalità: erogazione del servizio di creazione e
              gestione dei link brevi, inclusa la creazione e amministrazione dell'account utente; miglioramento delle
              funzionalità della piattaforma e analisi statistica in forma aggregata dell'utilizzo del servizio;
              adempimento di obblighi contrattuali, legali e fiscali; prevenzione di frodi, abusi e utilizzi illeciti
              del servizio; invio di comunicazioni di servizio relative all'account e, previo consenso specifico, invio
              di comunicazioni promozionali o newsletter.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Base giuridica</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              Il trattamento dei dati personali si fonda, a seconda dei casi, sulle seguenti basi giuridiche:
              l'esecuzione di un contratto di cui l'utente è parte, per la fornitura del servizio richiesto; il
              legittimo interesse del Titolare a garantire la sicurezza della piattaforma e a migliorarne le
              funzionalità; l'adempimento di obblighi di legge cui è soggetto il Titolare; il consenso dell'utente,
              quando richiesto, ad esempio per l'invio di comunicazioni promozionali o per l'utilizzo di cookie non
              tecnici.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Conservazione dei dati</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              I dati personali sono conservati per il tempo strettamente necessario al conseguimento delle finalità per
              cui sono stati raccolti. In particolare, i dati relativi all'account sono conservati per tutta la durata
              del rapporto contrattuale e, in seguito alla cancellazione dell'account, per il periodo necessario ad
              adempiere a eventuali obblighi legali o per far valere o difendere un diritto in sede giudiziaria. I dati
              di navigazione aggregati e anonimizzati possono essere conservati per periodi più lunghi a fini
              statistici.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Diritti dell'utente</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              In qualità di interessato, l'utente ha il diritto di ottenere dal Titolare l'accesso ai propri dati
              personali, la rettifica o la cancellazione degli stessi, la limitazione del trattamento nei casi previsti,
              nonché di opporsi al trattamento e di richiedere la portabilità dei dati. L'utente ha inoltre il diritto
              di revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento
              svolto prima della revoca, e di proporre reclamo all'Autorità Garante per la protezione dei dati personali
              qualora ritenga che il trattamento violi la normativa vigente. Per esercitare tali diritti è possibile
              contattare il Titolare tramite i recapiti indicati nella sezione Contatti.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Sicurezza</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              VESTA adotta misure tecniche e organizzative adeguate a garantire un livello di sicurezza idoneo rispetto
              ai rischi connessi al trattamento dei dati personali, tra cui la crittografia delle password, l'utilizzo
              di connessioni protette e il controllo degli accessi ai sistemi. Tali misure sono costantemente riviste e
              aggiornate per far fronte all'evoluzione delle minacce alla sicurezza informatica e per assicurare la
              riservatezza, l'integrità e la disponibilità dei dati trattati.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="--font-title text-[#211D1A] text-2xl md:text-3xl pt-4 pb-2">Contatti</h2>
            <p className="--font-text text-[#211D1A] text-[0.875rem] leading-7">
              Per qualsiasi domanda relativa alla presente Privacy Policy o per esercitare i propri diritti in materia
              di protezione dei dati personali, l'utente può contattare il Titolare del trattamento all'indirizzo email{" "}
              <a href="" className="font-bold hover:text-[#C47048]">
                info@vesta.it
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Privacy;
