import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart"
import CheckoutForm from "./CheckoutForm"

class CartContainer extends Component {
  render(){
    return (
      <div className="boxes" style={{marginTop: "25px"}}>
        <Cart cartItems={this.props.cart} />
        <CheckoutForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log(state.products);
  return {
    cart: state.products.cart
  };
}

export default connect(mapStateToProps)(CartContainer)