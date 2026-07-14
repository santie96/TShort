function CardRecensioni( { id, Stars,  Description, Name, City }) {
    return (
        <>
            <div className="bg-[#F6F4F0] h-auto mt-4 border border-[#DDDAD5] rounded-2xl">
                <div className="p-5 grid gap-3 font-text">

                    
                    <span>{Stars}</span>

                    <p>"{Description}"</p>

                    <hr className="text-[#DDDAD5] mt-4" />

                    <div className="flex gap-2">
                        <span className="font-semibold">{Name}</span>
                        <span>·</span>
                        <span>{City}</span>
                    </div>
                    
                </div>
                

            </div>
        </>
    )
}

export default CardRecensioni