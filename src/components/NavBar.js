import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
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
                <i className="fas fa-shopping-cart"></i>
              </div>
            </div>
          </Link>{" "}
        </section>
      </nav>
    );
  }
}
