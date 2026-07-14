import CardCategorie from "./layout/CardCategorie";

function WidgetCategorie() {
  const categorie = [
    {
      title: "Donna",
      subtitle: "Silhouette morbide e tessuti naturali",
      image: "./src/img/categoria/women.webp",
      to: "/abbigliamento-donna",
    },
    {
      title: "Uomo",
      subtitle: "Essenziali e versatili per ogni giorno",
      image: "./src/img/categoria/men.webp",
      to: "/abbigliamento-uomo",
    },
    {
      title: "Bambini",
      subtitle: "Comfort e calore per i più piccoli",
      image: "./src/img/categoria/kids.webp",
      to: "/abbigliamento-bambini",
    },
  ];
  return (
    <>
      <div className="bg-[#F6F4F0]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:pt-20">
          <div className="flex flex-col justify-center items-center">
            <span className="uppercase text-sm font-text text-[#C47048]">Fai la tua scelta</span>
            <h2 className="font-title text-[#211D1A] font-semibold text-title-size text-center lg:text-[2.25rem]">
              Uno stile per tutta la famiglia
            </h2>
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {categorie.map((item) => (
                  <CardCategorie key={item.title} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WidgetCategorie;
