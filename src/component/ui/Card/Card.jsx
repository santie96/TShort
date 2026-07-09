import { NavLink } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

function Card({ title, subtitle, image, to }) {
  return (
    <>
      <NavLink to={to} className="relative overflow-hidden rounded-xl">
        <div className="relative group aspect-[3/4] sm:aspect-[4/5] ">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover block transition-all group-hover:scale-105 duration-700 ease-in-out"
          />
          <div className="absolute bottom-0 flex items-end p-5 md:p-5 lg:p-5 w-full h-full inset-0 bg-[#191101]/10 justify-between">
            <div className="text-[#F6F4F0]">
              <h2 className="text-stitle-size font-semibold font-title">{title}</h2>
              <p className="text-sm font-text">{subtitle}</p>
            </div>
            <div className="p-2.5 bg-[#F6F4F0] group-hover:bg-[#C47048] group-hover:text-[#F6F4F0] duration-300 rounded-full cursor-pointer flex justify-center items-center">
              <MdOutlineArrowOutward className="text-icon-size" />
            </div>
          </div>
        </div>
      </NavLink>
    </>
  );
}

export default Card;
