import Stars from "./Stars";

function CardRecensioni({ Stars: rating, Description, Name, City }) {
    return (
        <article className="mt-4 h-auto rounded-2xl border border-[#DDDAD5] bg-[#F6F4F0]">
            <div className="grid gap-3 p-5 font-text">


                <Stars rating={rating} />

                <p className="h-15">"{Description}"</p>

                <hr className="text-[#DDDAD5]" />

                <div className="flex gap-2">
                    <span className="font-semibold">{Name}</span>
                    <span>·</span>
                    <span>{City}</span>
                </div>

            </div>
        </article>
    )
}

export default CardRecensioni
