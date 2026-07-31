import { useContext } from "react";
import { CartContext } from "../utilities/context/CartContext";

function Carrello() {
  const { cart } = useContext(CartContext);

  console.log("Carrello:", cart);

  console.log(cart);

  return (
    <>
      <h1>Carrello</h1>

      {cart.map((item) => (
        <p key={item.id}>
          {item.title} - {item.quantity}
        </p>
      ))}
    </>
  );
}

export default Carrello;