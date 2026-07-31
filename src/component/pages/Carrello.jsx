import { useContext } from "react";
import { CartContext } from "../utilities/context/CartContext";

function Carrello() {
  const { cart, decreaseQuantity, increaseQuantity } = useContext(CartContext);

  console.log("Carrello:", cart);

  console.log(cart);

  return (
    <>
      <div className="bg-[#FDFCF9]">
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8  md:pt-2 md:pb-15">
          <div className="flex flex-col justify-start items-start">
            <h1>Carrello</h1>
            {cart.map((item) => (
              <p key={item.id}>
                {item.title} - {item.quantity}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carrello;