import { useContext } from "react";
import { CartContext } from "../utilities/context/CartContext";
import CartCardProdotti from "../ui/layout/CartCardProdotti";

function Carrello() {
  const { cart } = useContext(CartContext);

  console.log("Carrello:", cart);

  console.log(cart);

  return (
    <>
      <div className="bg-[#FDFCF9]">
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8  md:pt-2 md:pb-15">
          <div className="flex flex-col justify-start items-start">
            <h1>Carrello</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4">
              {cart.map((item) => (
                <CartCardProdotti key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrello;