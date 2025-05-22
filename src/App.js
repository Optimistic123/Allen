import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import ProductList from "./Page/ProductList";
import ProductDetail from "./Page/ProductDetail";
import CartPage from "./Page/CartPage";

function App() {
  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
