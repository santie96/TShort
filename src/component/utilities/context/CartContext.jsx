import { createContext, useState } from "react";
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../function-utilities/cartService";

const CartContext = createContext();



function CartProvider({ children }) {

    const [cart, setCart] = useState([]);


    const totalItems = cart.reduce(
        (accumulator, item) => {
            return accumulator + item.quantity;
        },
        0
    );


    const totalPrice = cart.reduce(
        (accumulator, item) => {
            return accumulator + item.quantity * item.price;
        },
        0
    );

    return (
        <>
            <CartContext.Provider value={{
                cart,
                totalItems,
                totalPrice,
                addToCart,
                removeFromCart,
                decreaseQuantity,
                increaseQuantity
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export { CartContext, CartProvider };