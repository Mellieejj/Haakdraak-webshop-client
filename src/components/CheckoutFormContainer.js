import React, { Component } from "react";
import { connect } from "react-redux";
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

    this.props.createOrder({
      form: this.state,
      items: this.props.cartItems
    });

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
      />
    );
  }
}

export default connect(null, { createOrder })(CheckoutFormContainer);
