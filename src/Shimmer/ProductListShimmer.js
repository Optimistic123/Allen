import "./Shimmer.css";

export const ProductListShimmer = () => (
  <div className="product-list-shimmer">
    <div className="grid">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="card" key={i}>
          <div className="img-shimmer" />
          <div className="strike" />
          <div className="final" />
        </div>
      ))}
    </div>
  </div>
);
