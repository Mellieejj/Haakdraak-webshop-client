import React, { Component } from "react";

export default class CheckoutForm extends Component {
  render() {
    return (
      <div className="box">
        <h3>Bestel Formulier</h3>
        <div>
          <form>
            <table>
              <tbody>
                <tr>
                  <td>Voornaam:</td>
                  <td>
                    <input type="text" name="firstName" />
                  </td>
                </tr>
                <tr>
                  <td>Achternaam:</td>
                  <td>
                    <input type="text" name="lastName" />
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <input type="text" name="email" />
                  </td>
                </tr>
                <tr>
                  <td>Straat:</td>
                  <td>
                    <input type="text" name="straat" />
                  </td>
                </tr>
                <tr>
                  <td>Huisnummer:</td>
                  <td>
                    <input type="number" name="huisnr" />
                  </td>
                </tr>
                <tr>
                  <td>Postcode:</td>
                  <td>
                    <input
                      type="text"
                      name="postcode"
                      required
                      pattern="[0-9]{4}[A_Z]{2}"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Woonplaats:</td>
                  <td>
                    <input type="text" name="city" />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td>
                    <button>Bestel</button> <button>Wis alles</button>
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
