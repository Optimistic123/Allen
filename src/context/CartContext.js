import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const count = prev[product.id]?.count || 0;
      return { ...prev, [product.id]: { product, count: count + 1 } };
    });
  };

  const updateCount = (id, delta) => {
    setCart((prev) => {
      const item = prev[id];
      if (!item) return prev;
      const newCount = item.count + delta;
      if (newCount <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: { ...item, count: newCount } };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCount }}>
      {children}
    </CartContext.Provider>
  );
};
