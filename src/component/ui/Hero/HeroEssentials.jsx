import { NavLink } from "react-router-dom";

function HeroEssentials() {
  return (
    <section className="relative bg-[url('./src/img/hero/Summer-Essentials.webp')] max-[769px]:bg-bottom bg-cover bg-no-repeat min-h-[55vh] md:min-h-140">
      <div className="flex flex-col gap-7 justify-center items-center absolute w-full h-full inset-0 bg-black/60">
        <div className="px-5 flex flex-col gap-4 ">
          <h2 className="text-[#F6F4F0] font-title text-4xl text-center">Summer Essentials</h2>
          <p className="m-auto text-[#F6F4F0] text-center font-text text-size">Leggeri, freschi, versatili</p>
        </div>
        <div className="flex gap-6">
          <button
            type="button"
            className="text-[#C47048] font-semibold  cursor-pointer rounded-md lg:py-2 lg:px-4 py-2 px-4 text-[1.1rem] lg:text-stitle-size bg-[#F6F4F0] hover:bg-[#C47048] hover:text-[#F6F4F0] transition-all hover:scale-110 duration-300"
          >
            <NavLink to="/abbigliamento-bambini">Bambino</NavLink>
          </button>
          <button
            type="button"
            className="text-[#C47048] font-semibold cursor-pointer rounded-md lg:py-2 lg:px-4 py-2 px-4 text-[1.1rem] lg:text-stitle-size bg-[#F6F4F0] hover:bg-[#C47048] hover:text-[#F6F4F0] transition-all hover:scale-110 duration-300"
          >
            <NavLink to="/abbigliamento-bambini">Bambina</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroEssentials;
