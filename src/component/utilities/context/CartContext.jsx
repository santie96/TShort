import { createContext, useState, useEffect } from "react";
import { addToCart, decreaseQuantity, increaseQuantity, removeFromCart } from "../function-utilities/cartService";



const CartContext = createContext();



function CartProvider({ children }) {

    const [cart, setCart] = useState(() => { const saved = localStorage.getItem("cart"); return saved ? JSON.parse(saved) : []; });

    useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);


    const totalItems = cart.reduce(
        (accumulator, item) => {
            return accumulator + item.quantity;
        },
        0
    );


    const totalPrice = cart.reduce(
        (accumulator, item) => {
            if (item.sale > 0) {
                return accumulator + item.quantity * (item.price - ((item.price * item.sale) /100) )
            }
            
            return accumulator + item.quantity * item.price;
        },
        0
    ).toFixed(2);

    function handleAddToCart(product) {
        addToCart(product, cart, setCart);
    }
    function handleremoveFromCart(product) {
        removeFromCart(product, cart, setCart);
    }
    function handledecreaseQuantity(product) {
        decreaseQuantity(product, cart, setCart);
    }
    function handleincreaseQuantity(product) {
        increaseQuantity(product, cart, setCart);
    }

    return (
        <>
            <CartContext.Provider value={{
                cart,
                totalItems,
                totalPrice,
                addToCart: handleAddToCart,
                removeFromCart: handleremoveFromCart,
                decreaseQuantity: handledecreaseQuantity,
                increaseQuantity : handleincreaseQuantity
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export { CartContext, CartProvider };