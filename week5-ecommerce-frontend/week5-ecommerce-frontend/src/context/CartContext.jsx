import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (product) => {
    if (!product.id) {
      console.error("❌ Product missing ID:", product);
      return;
    }

    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => String(item.id) === String(product.id)
      );

      if (existingItem) {
        // Increase quantity if already exists
        return prev.map((item) =>
          String(item.id) === String(product.id)
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // Add new product
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ✅ REMOVE FROM CART (ID SAFE)
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => String(item.id) !== String(id))
    );
  };

  // ✅ INCREASE QTY
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        String(item.id) === String(id)
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // ✅ DECREASE QTY
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          String(item.id) === String(id)
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0) // Auto remove if qty = 0
    );
  };

  // ✅ TOTAL PRICE
  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.qty,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
