import CardCategorie from "./CardCategorie";

function ContCategorie() {
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
      <div>
        <div className="bg-[#F6F4F0] w-full px-4 sm:px-6 lg:px-75 py-4 md:py-6">
          <div className="flex flex-col justify-center items-center">
            <span className="uppercase text-sm font-text text-[#C47048] mt-8">Fai la tua scelta</span>
            <h2 className="font-title text-[#211D1A] font-semibold text-title-size text-center lg:text-[2.25rem]">
              Uno stile per tutta la famiglia
            </h2>
            <div className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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

export default ContCategorie;
