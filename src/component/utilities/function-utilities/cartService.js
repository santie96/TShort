

// Aggiunge oggetto al carrello {#e24,24}
export function addToCart(product) {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
        setCart(
            cart.map((item) =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
        return;
    }

    setCart([
        ...cart,
        {
            ...product,
            quantity: 1
        }
    ])
};


// Remuove oggetto dal carrello {#06d,7}
export function removeFromCart(product) {
    setCart(
        cart.filter((item) =>
            item.id !== product.id
        )
    );
};


// Decrementa oggetto dal carrello {#da0,19}
export function decreaseQuantity(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct.quantity === 1) {
        removeFromCart(product);
        return;
    }

    setCart(
        cart.map((item) =>
            item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                }
                : item
        )
    );
}


// Incrementare oggetto nel carrello {#4f8,14}
export function increaseQuantity(product) {
    const existingProduct = cart.find((item) => item.id === product.id);

    setCart(
        cart.map((item) =>
            item.id === product.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                }
                : item
        )
    );
}





const cart = [
  {
    id: 1,
    name: "Maglietta",
    price: 20,
    quantity: 2,
  },
  {
    id: 2,
    name: "Jeans",
    price: 50,
    quantity: 1,
  },
];








