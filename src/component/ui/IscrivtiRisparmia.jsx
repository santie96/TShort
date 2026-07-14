

function IscrivitiRisparmia() {
    return (
        <>

            <div className="bg-[#F6F4F0]">
                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-15">
                    <div className="w-full bg-[#211D1A] text-white px-6 py-20  rounded-2xl">
                        <div className="flex flex-col items-center text-center gap-3 mb-6 text-balance">
                            <h2 className="text-title-size font-title">Iscriviti e ricevi il 10% di sconto</h2>
                            <p className="font-text">Novità, arrivi in anteprima e offerte esclusive. Niente spam, solo ciò che ami.</p>
                        </div>
                        <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center text-balance gap-4 px-6 md:flex-row">
                            <input type="text" placeholder="La tua email" className="bg-white/15 border border-[#66635F] text-gray-300 rounded-3xl w-full py-2 px-4  md:w-70" />
                            <button className="bg-white text-black rounded-3xl py-2 w-full md:w-30">Iscriviti</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default IscrivitiRisparmia