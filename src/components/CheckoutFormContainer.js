import React, { Component } from "react";
import { connect } from "react-redux";
import emailjs from "emailjs-com";
import { createOrder } from "../actions/orderActions";
import CheckoutForm from "./CheckoutForm";

class CheckoutFormContainer extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    housenr: "",
    postcode: "",
    city: "",
    opmerkingen: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { cartItems } = this.props;

    const totalPrice = this.props.cartItems
      ? this.props.cartItems.reduce((prevValue, currentValue) => {
          const numberPrice = parseFloat(currentValue.price);
          const priceQuantity = numberPrice * currentValue.quantity;
          return (Number(priceQuantity) + Number(prevValue)).toFixed(2);
        }, 0)
      : null;

    this.props.createOrder({
      form: this.state,
      items: this.props.cartItems,
    });

    const formOrder = {
      ...this.state,
      cartItems: cartItems
        .map((item) => item.name + " " + item.quantity + "x")
        .join("<br />"),
      totalPrice,
    };

    emailjs
      .send(
        "smtp_server",
        "bestel_form",
        formOrder,
        "user_4XE8EaLYpu2i37GtsnZ5k"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          street: "",
          housenr: "",
          postcode: "",
          city: "",
          opmerkingen: "",
        })
      )
      .then(this.props.clearCart());
  };

  reset = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      housenr: "",
      postcode: "",
      city: "",
      opmerkingen: "",
    });
  };

  render() {
    return (
      <CheckoutForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
        reset={this.props.reset}
        errors={this.props.errors}
        cartItems={this.props.cartItems}
      />
    );
  }
}

export default connect(null, { createOrder })(CheckoutFormContainer);
