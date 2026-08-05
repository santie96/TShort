import { Link } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { calcoloPrezzoScontato } from "../../utilities/function-utilities/prezzoService";
import { screenSize } from "../../utilities/Custom-Hook/ScreenSizeService";
import { CartContext } from "../../utilities/context/CartContext"
import { useContext } from "react";


function CartCardProdotti({ product }) {

  const { cart, decreaseQuantity, increaseQuantity, removeFromCart } = useContext(CartContext);

  const isLargeScreen = screenSize()


  const badgeText = product.newArrivals ? "Novità" : product.sale > 0 ? "Saldi" : "";
  const badgeColor = product.newArrivals ? "bg-[#3F8AAC]" : product.sale > 0 ? "bg-red-600" : "hidden";

  const { OriginalPrice, priceTot, showSale } = calcoloPrezzoScontato(product.price, product.sale, product.newArrivals)

  return (
    <>
      <div className="flex items-center gap-5">
        <div className="relative overflow-hidden rounded-xl">

          <div className="relative group aspect-3/4 sm:aspect-4/5">
            <Link to={`/prodotto/${product.id}`} className="block h-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 object-cover block transition-all group-hover:scale-105 duration-500 ease-in-out"
              />
            </Link>
          </div>

        </div>

        <div className="text-black font-text flex flex-col gap-1">

          <h2 className="text-base font-semibold font-title mt-1">{product.title}</h2>
          <p className="text-sm font-text">{product.subtitle}</p>

          {showSale ? (
            <div className="flex gap-2 items-center font-text">

              <span className="text-sm font-text line-through font-medium">{OriginalPrice}€</span>

              <div className="flex gap-2 items-center bg-red-500/20 px-1">
                <span className="text-red-600 font-medium">{`${priceTot}`}€</span>
                <span className="text-red-600 text-sm font-medium">{product.sale}%</span>
              </div>


            </div>) : (
            <>
              <span className="font-text font-medium">{OriginalPrice}€</span>
            </>
          )}

          <div className="flex gap-3 items-center">
            <button
              className="cursor-pointer border rounded-full border-black select-none h-6 w-6 grid place-items-center"
              type="button"
              onClick={() => decreaseQuantity(product)}>
              -
            </button>

            <span className="w-4 flex justify-center select-none">{product.quantity}</span>

            <button
              className="cursor-pointer border rounded-full border-black select-none h-6 w-6 grid place-items-center"
              type="button"
              onClick={() => increaseQuantity(product)}>
              +
            </button>


            <button
              className="cursor-pointer border rounded-full border-black select-none h-8 w-24"
              type="button"
              onClick={() => removeFromCart(product)}>
              Rimouvi
            </button>
          </div>


        </div>
      </div >
    </>
  );
}

export default CartCardProdotti;
