import { createContext, useState } from "react";

const CartContext = createContext();



function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    return (
        <>
            <CartContext.Provider value={{ cart }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export { CartContext, CartProvider };