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
    opmerkingen: ""
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { cartItems } = this.props;

    this.props.createOrder({
      form: this.state,
      items: this.props.cartItems
    });

    const formOrder = {
      ...this.state,
      cartItems: cartItems
        .map(item => item.name + " " + item.quantity + "x")
        .join("<br />")
    };

    emailjs
      .send(
        "smtp_server",
        "bestel_form",
        formOrder,
        "user_4XE8EaLYpu2i37GtsnZ5k"
      )
      .then(
        result => {
          console.log("SUCCESS!", result.status, result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      housenr: "",
      postcode: "",
      city: "",
      opmerkingen: ""
    });

    this.props.clearCart();
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
      opmerkingen: ""
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
      />
    );
  }
}

export default connect(null, { createOrder })(CheckoutFormContainer);
