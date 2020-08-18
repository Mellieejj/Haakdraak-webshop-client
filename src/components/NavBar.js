import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector(({products}) => products.cart);

  const countCart = cart.reduce((lastValue, newValue) => {
    return lastValue + newValue.quantity;
  }, 0);

  return (
    <nav className="main-nav">
      <img src="https://www.haakdraak.nl/afbeeldingen/5.jpg" alt="logo" />
      <h1>HaakDraak</h1>
      <section className="nav">
        <Link to="/">
          <div className="dropdown">
            <div className="dropdown__hover">Home</div>
          </div>
        </Link>
        <Link to="/producten">
          <div className="dropdown">
            <div className="dropdown__hover">Producten</div>
          </div>{" "}
        </Link>
        <Link to="/contact">
          <div className="dropdown">
            <div className="dropdown__hover">Contact</div>
          </div>{" "}
        </Link>
        <Link to="/cart">
          <div className="dropdown">
            <div className="dropdown__hover">
              <i className="fas fa-shopping-bag"></i> {countCart}
            </div>
          </div>
        </Link>{" "}
      </section>
    </nav>
  );
}
