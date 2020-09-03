import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector(({ products }) => products.cart);

  const countCart = cart.reduce((lastValue, newValue) => {
    return lastValue + newValue.quantity;
  }, 0);

  return (
    <nav className="main-nav">
      {/* logo */}
      <div className="main-nav__logo">
        <img src="https://www.haakdraak.nl/afbeeldingen/5.jpg" alt="logo" />
        <h1>HaakDraak</h1>
      </div>
      {/* menu */}
      <div className="main-nav__nav">
        <Link to="/">
          <div className="main-nav__nav-item">Home</div>
        </Link>
        <Link to="/producten">
          <div className="main-nav__nav-item">Producten</div>
        </Link>
        <Link to="/contact">
          <div className="main-nav__nav-item">Contact</div>
        </Link>
        <Link to="/cart">
          <div className="main-nav__nav-item">
            <i className="fas fa-shopping-bag"></i> {countCart}
          </div>
        </Link>
      </div>
    
    </nav>
  );
}
