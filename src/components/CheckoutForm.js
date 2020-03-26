import React, { Component } from "react";

export default class CheckoutForm extends Component {
  render() {
    return (
      <div className="box">
        <h3>Bestel Formulier</h3>
        <div>
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
                      pattern="[0-9]{4}[A_Z]{2}"
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
              <tfoot>
                <tr>
                  <td></td>
                  <td>
                    <button type="submit">Bestel</button>{" "}
                    <button onClick={() => this.props.reset}>Wis alles</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>
        </div>
      </div>
    );
  }
}
