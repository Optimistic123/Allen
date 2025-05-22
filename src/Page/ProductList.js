import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductListShimmer } from "../Shimmer/ProductListShimmer";
import "./ProductList.css";
// import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  if (!products.length) return <ProductListShimmer />;

  return (
    <div className="grid">
      {products.map((p) => (
        <Link to={`/product/${p.id}`} key={p.id} className="card">
          <img src={p.thumbnail} alt={p.title} />
          <h3>{p.title}</h3>
          <p>
            {p.discountPercentage > 0 && (
              <span className="strike">${p.price.toFixed(2)}</span>
            )}
            <span className="final">
              ${(p.price * (1 - p.discountPercentage / 100)).toFixed(2)}
            </span>
          </p>
        </Link>
        // <Product p={p} />
      ))}
    </div>
  );
};

export default ProductList;
