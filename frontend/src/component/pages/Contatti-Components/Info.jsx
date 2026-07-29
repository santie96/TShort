import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMapPin } from "react-icons/ci";
import MiaMappa from "../Contatti-Components/Mappa";

function Info() {
  return (
    <>
      <section className="flex flex-col gap-8 bg-[#F6F4F0] font-text  text-left p-7 rounded-2xl ">
        <div className="mb-5">
          <h2 className="font-title font-bold text-title-size">Informazioni</h2>
          <p className="font-semibold text-size">Scegli come preferisci contattarci.</p>
        </div>

        <ul className="flex flex-col gap-8">
          <li className="flex items-center gap-6">
            <div className="bg-[#FDFCF9] p-2 rounded-4xl text-[#C47048] text-xl shrink-0">
              <CiMail className="text-icon-main shrink-0" />
            </div>
            <div>
              <h4 className="text-stitle-size font-semibold">Scrivici una email</h4>
              <a
                href="mailto:info@vesta.it"
                className="underline decoration-transparent hover:decoration-[#C47048] transition-colors duration-300"
              >
                info@vesta.it
              </a>
            </div>
          </li>
          <li className="flex items-center gap-6">
            <div className="bg-[#FDFCF9] p-2 rounded-4xl text-[#C47048] text-xl shrink-0">
              <CiPhone className="text-icon-main shrink-0 font-" />
            </div>
            <div>
              <h4 className="text-stitle-size font-semibold">Chiamaci</h4>
              <a
                href="tel:+390123456789"
                className="underline decoration-transparent hover:decoration-[#C47048] transition-colors duration-300"
              >
                +39 0123 456789
              </a>
            </div>
          </li>
          <li className="flex items-center gap-6 lg:hidden">
            <div className="bg-[#FDFCF9] p-2 rounded-4xl text-[#C47048] text-xl shrink-0">
              <CiMapPin className="text-icon-main shrink-0" />
            </div>
            <div>
              <h4 className="text-stitle-size font-semibold">Sede legale</h4>
              <a
                href="https://www.google.com/maps/place/Via+Alessandro+Pannocchia,+22,+57124+Livorno"
                className="underline decoration-transparent hover:decoration-[#C47048] transition-colors duration-300"
              >
                Via Alessandro Pannocchia, 22 57124 Livorno (LI) - Italia
              </a>
            </div>
          </li>
        </ul>
        <hr className="text-[#DDDAD5] w-full max-[64rem]:hidden" />

        <div className="max-[64rem]:hidden">
          <MiaMappa />
        </div>
      </section>
    </>
  );
}

export default Info;
