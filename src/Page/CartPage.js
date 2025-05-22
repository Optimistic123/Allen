import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, updateCount } = useContext(CartContext);
  const items = Object.values(cart);
  const total = items
    .reduce(
      (acc, { product, count }) =>
        acc + product.price * (1 - product.discountPercentage / 100) * count,
      0
    )
    .toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map(({ product, count }) => (
        <div key={product.id} className="cart-item">
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <h4>{product.title}</h4>
            <p>
              $
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                2
              )}
            </p>
            <div className="counter">
              <button onClick={() => updateCount(product.id, -1)}>-</button>
              <span>{count}</span>
              <button onClick={() => updateCount(product.id, 1)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default CartPage;
