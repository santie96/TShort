import { NavLink } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

function CardProdotti({ id, image, title, subtitle, to }) {
  return (
    <>
      <div className="flex flex-col">
        <NavLink to={to} className="relative overflow-hidden rounded-xl">
          <div className="relative group aspect-3/4 sm:aspect-4/5 ">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover block transition-all group-hover:scale-105 duration-500 ease-in-out"
            />
            <div className="absolute top-0 p-3 md:p-5 lg:p-5 inset-0">
              <span className="bg-[#3F8AAC] text-[#F6F4F0] rounded-2xl px-1.5 py-[0.175rem] text-sm">Novità</span>
            </div>

            <div className="absolute bottom-0 flex items-end p-5 md:p-5 lg:p-5 w-full h-full inset-0 bg-[#191101]/10 justify-between">
              <div className="p-2.5 w-full lg:translate-y-3 lg:opacity-0 bg-[#23201D] text-[#F6F4F0] rounded-full cursor-pointer flex justify-center items-center lg:transition-all lg:group-hover:bg-[#C47048] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 lg:duration-500 lg:ease-in-out">
                <button className="cursor-pointer">Aggiungi al carrello</button>
              </div>
            </div>
          </div>
        </NavLink>
        <div className="text-black">
          <h2 className="text-base font-semibold font-title">{title}</h2>
          <p className="text-sm font-text">{subtitle}</p>
        </div>
      </div>
    </>
  );
}

export default CardProdotti;
