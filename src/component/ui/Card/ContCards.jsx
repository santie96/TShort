import Card from "./Card"


function ContCard() {

    return (
        <>
            <div className="bg-[#F6F4F0] w-full">
                <div className=" flex flex-col justify-center items-center">
                    <span className="uppercase text-sm font-text text-[#C47048] mt-8">Fai la tua scelta</span>
                    <h2 className="font-title text-[#211D1A] font-semibold text-[2.25rem]">Uno stile per tutta la famiglia</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 md:p-7 lg:px-55  gap-4">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContCard