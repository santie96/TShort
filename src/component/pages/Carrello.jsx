import { useContext } from "react";
import { CartContext } from "../utilities/context/CartContext";
import CartCardProdotti from "../ui/layout/CartCardProdotti";

function Carrello() {
  const { cart, totalItems, totalPrice } = useContext(CartContext);

  console.log("Carrello:", cart);

  console.log(cart);

  return (
    <>
      <div className="bg-[#FDFCF9]">
        <div>
          <h1>Carrello</h1>
        </div>
        <div className="grid grid-cols-1 gap-8 p-8">

          <div className="">
            <div className="flex flex-col justify-start items-start">
              <div className="grid grid-cols-1 gap-6 md:gap-4">
                {cart.map((item) => (
                  <CartCardProdotti key={item.id} product={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-400 mx-auto w-full p-6 space-y-2">
            <div className="flex gap-2">
              <h6>Tot:</h6>
              <span>{totalItems}</span>
            </div>

            <div className="flex gap-2">
              <h6>Prezzo tot:</h6>
              <span>{`${totalPrice} €`}</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Carrello;