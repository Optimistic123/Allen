import "./ProductList.css";
import { Link } from "react-router-dom";

const Product = (p) => {
  return (
    <>
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
    </>
  );
};

export default Product;
