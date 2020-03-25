import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <img src="https://www.haakdraak.nl/afbeeldingen/5.jpg" alt="logo" />
        <h1>HaakDraak</h1>
        <section>
          <div class="dropdown">
            <Link to="/">
              <div class="dropdown__hover">Home</div>
            </Link>
          </div>
          <div class="dropdown">
            <Link to="/producten">
              <div class="dropdown__hover">Producten</div>
            </Link>
          </div>
          <div class="dropdown">
            <Link to="/contact">
              <div class="dropdown__hover">Contact</div>
            </Link>
          </div>
        </section>
      </nav>
    );
  }
}
