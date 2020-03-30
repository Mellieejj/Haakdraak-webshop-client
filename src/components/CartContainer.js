import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import CheckoutFormContainer from "./CheckoutFormContainer";
import { cartAdd, cartSubtract, clearCart } from "../actions/productActions";

class CartContainer extends Component {
  addToCartHandler = id => {
    this.props.cartAdd(id);
  };

  subtractFromCartHandler = id => {
    this.props.cartSubtract(id);
  };

  clearCart = () => {
    this.props.clearCart();
  };

  render() {
    return (
      <div className="boxes" style={{ marginTop: "25px" }}>
        <Cart
          cartItems={this.props.cart}
          addToCart={this.addToCartHandler}
          subtractFromCart={this.subtractFromCartHandler}
          clearCart={this.props.clearCart}
        />
        <CheckoutFormContainer
          cartItems={this.props.cart}
          errors={this.props.errors}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log("cartContainer", state.errors);
  return {
    cart: state.products.cart,
    errors: state.errors
  };
}

const mapDispatchToProps = { cartAdd, cartSubtract, clearCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
