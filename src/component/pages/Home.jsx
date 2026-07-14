import CarouselHero from "../ui/CarouselHero";
import WidgetCategorie from "../ui/WidgetCategorie";
import WidgetNuoviArrivi from "../ui/WidgetNuoviArrivi";
import BannerSaldiEstivi from "../ui/BannerSaldiEstivi";
import WidgetSaldi from "../ui/WidgetSaldi";
import WidgetRecensioni from "../ui/WidgetRecensioni";




function Home() {
  return (
    <>
      <CarouselHero />
      <WidgetCategorie />
      <WidgetNuoviArrivi />
      <BannerSaldiEstivi />
      <WidgetSaldi />

      <WidgetRecensioni />
    </>
  );
}

export default Home;
