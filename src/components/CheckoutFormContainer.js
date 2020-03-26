import React, { Component } from "react";
import {connect} from "react-redux"
import CheckoutForm from "./CheckoutForm"

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

    //action to backend moet hier nog tussen
    console.log("submit");

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
    console.log("state", this.state)
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

export default connect()(CheckoutFormContainer);
