import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {
  render() {
    const count = this.props.cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);

    console.log("cart count", count);

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
               <i className="fas fa-shopping-cart"></i>{" "} {count} 
              </div> 
            </div>
          </Link>{" "}
        </section>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.products.cart
  };
}

export default connect(mapStateToProps)(NavBar);
