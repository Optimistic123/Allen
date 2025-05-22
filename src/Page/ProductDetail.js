import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductDetailShimmer } from "../Shimmer/ProductDetailShimmer";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, addToCart, updateCount } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <ProductDetailShimmer />;

  const inCart = cart[product.id]?.count || 0;
  const final = (
    product.price *
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <div className="detail">
      <img src={product.thumbnail} alt={product.title} />
      <div>
        <h2>{product.title}</h2>
        {product.discountPercentage > 0 && (
          <span className="strike">${product.price.toFixed(2)}</span>
        )}
        <span className="final">${final}</span>
        <p>{product.description}</p>
        {inCart ? (
          <div className="counter">
            <button onClick={() => updateCount(product.id, -1)}>-</button>
            <span>{inCart}</span>
            <button onClick={() => updateCount(product.id, 1)}>+</button>
          </div>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
