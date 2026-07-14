import { NavLink } from "react-router-dom";

function HeroNArrivi() {
  return (
    <section className="relative bg-[url('./src/img/hero/Nuovi-Arrivi.webp')] max-[769px]:bg-bottom bg-cover bg-no-repeat min-h-[55vh] md:min-h-150">
      <div className="flex flex-col gap-7 justify-center items-center absolute w-full h-full inset-0 bg-black/60">
        <div className="px-5 flex flex-col gap-4 ">
          <h2 className="text-[#F6F4F0] font-title text-4xl text-center">Nuova collezione Estate</h2>
          <p className="m-auto text-[#F6F4F0] text-center font-text text-size">Il tuo look, nuova energia.</p>
        </div>
        <div className="flex gap-6">
          <button
            type="button"
            className="text-[#C47048] font-semibold  cursor-pointer rounded-md lg:py-2 lg:px-4 py-2 px-5 text-[1.1rem] lg:text-stitle-size bg-[#F6F4F0] hover:bg-[#C47048] hover:text-[#F6F4F0] transition-all hover:scale-110 duration-300"
          >
            <NavLink to="/abbigliamento-donna">Donna</NavLink>
          </button>

          <button
            type="button"
            className="text-[#C47048] font-semibold  cursor-pointer rounded-md lg:py-2 lg:px-4 py-2 px-5 text-[1.1rem] lg:text-stitle-size bg-[#F6F4F0] hover:bg-[#C47048] hover:text-[#F6F4F0] transition-all hover:scale-110 duration-300"
          >
            <NavLink to="/abbigliamento-uomo">Uomo</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroNArrivi;
