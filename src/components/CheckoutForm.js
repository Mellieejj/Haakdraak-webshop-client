import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";

export default class CheckoutForm extends Component {
  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
    }
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  render() {
    return (
      <div className="box">
        <h2>Bestel Formulier</h2>
        <div>
          {this.props.errors ? (
            <p className="error">{this.props.errors}</p>
          ) : null}
          <form onSubmit={this.props.onSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>Voornaam:</td>
                  <td>
                    <input
                      type="text"
                      name="firstName"
                      value={this.props.values.firstName}
                      onChange={this.props.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Achternaam:</td>
                  <td>
                    <input
                      type="text"
                      name="lastName"
                      value={this.props.values.lastName}
                      onChange={this.props.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={this.props.values.email}
                      onChange={this.props.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Straat:</td>
                  <td>
                    <input
                      type="text"
                      name="street"
                      value={this.props.values.street}
                      onChange={this.props.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Huisnummer:</td>
                  <td>
                    <input
                      type="number"
                      name="housenr"
                      value={this.props.values.housenr}
                      onChange={this.props.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Postcode:</td>
                  <td>
                    <input
                      type="text"
                      name="postcode"
                      // pattern="[0-9]{4}[A_Z]{2}"
                      value={this.props.values.postcode}
                      onChange={this.props.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Woonplaats:</td>
                  <td>
                    <input
                      type="text"
                      name="city"
                      value={this.props.values.city}
                      onChange={this.props.onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Opmerkingen:</td>
                  <td>
                    <textarea
                      type="text"
                      name="opmerkingen"
                      style={{ minHeight: "4.5rem" }}
                      value={this.props.values.opmerkingen}
                      onChange={this.props.onChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <ReCaptcha
              ref={el => {
                this.captchaDemo = el;
              }}
              size="normal"
              render="explicit"
              sitekey="6Leof-UUAAAAANo8PrVrmrDcZRqPhxNrNLFM-BjP"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            />
            <input
              style={{ marginLeft: "125px" }}
              className="formButton"
              type="submit"
              value="Bestel" />
            <button className="formButton" onClick={() => this.props.reset}>
              <i className="fas fa-times"></i> Wis alles
            </button>
          </form>
        </div>
      </div>
    );
  }
}
