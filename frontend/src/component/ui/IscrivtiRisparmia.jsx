import { useState } from "react"

function IscrivitiRisparmia() {

    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [showError, setShowError] = useState(false)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!emailRegex.test(email)) {
            setShowError(true)

            setTimeout(() => {
                setShowError(false)
            }, 10000)
            
            return;
        }


        setShowError(false);

        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false)
            setEmail("")
        }, 6000)

    }

    return (

        <>

            <div className="bg-[#F6F4F0]">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
                    <div className="w-full bg-[#211D1A] text-white px-2 py-16  rounded-2xl">
                        <div className="flex flex-col items-center text-center gap-3 mb-8 text-balance">
                            <h2 className="text-[1.85rem] lg:text-[2.25rem] font-title font-semibold text-[#f0ede7]">Iscriviti e ricevi il 10% di sconto</h2>
                            <p className="font-text text-[#f0ede7]">Novità, arrivi in anteprima e offerte esclusive. Niente spam, solo ciò che ami.</p>
                        </div>
                        {isSubmitted ? (

                            <div className="w-full max-w-md mx-auto bg-[#C47048]/40 border border-[#C47048]/30 text-[#C47048] py-4 px-6 rounded-3xl text-center flex flex-col items-center gap-1.5 transition-all duration-300">

                                <p className="font-semibold text-lg text-white">Iscrizione completata!</p>
                                <p className="text-sm text-[#f0ede7]/80">Controlla la tua casella di posta per ricevere il codice sconto.</p>
                            </div>
                        ) : (
                            <>
                                {showError && (
                                    <div className="w-full max-w-sm mx-auto bg-red-500/20 border border-red-500 text-red-200 rounded-xl px-4 py-3 mb-4 text-center">
                                        Inserisci un indirizzo email prima di continuare.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto flex flex-col items-center justify-center text-balance gap-4 px-6 md:flex-row md:px-0">
                                    <input type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="La tua email" className="bg-white/15 border border-[#66635F] text-[#96938F] placeholder-[#96938F] rounded-3xl w-full py-2.5 px-4 outline-none focus:outline-none focus:ring focus:ring-background/60 transition-all duration-200 md:w-70" />
                                    <button type="submit" className="bg-[#F6F4F0] text-[#211D1A] rounded-3xl py-2.5 w-full hover:bg-[#C47048] hover:text-[#f0ede7] transition-colors duration-200 md:w-30" >Iscriviti</button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default IscrivitiRisparmia