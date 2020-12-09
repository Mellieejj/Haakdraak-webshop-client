import React from "react";
// import { ReCaptcha } from "react-recaptcha-google";
// import OrderInfo from "./OrderInfo";
import SendInfo from "./SendInfo";

export default function CheckoutForm (props) {
  const { errors, onSubmit, values, onChange, cartItems, reset} = props
  // componentDidMount() {
  //   if (this.captchaDemo) {
  //     console.log("started, just a second...");
  //     this.captchaDemo.reset();
  //   }
  // }

  // onLoadRecaptcha() {
  //   if (this.captchaDemo) {
  //     this.captchaDemo.reset();
  //   }
  // }

  // verifyCallback(recaptchaToken) {
  //   // Here you will get the final recaptchaToken!!!
  //   console.log(recaptchaToken, "<= your recaptcha token");
  //   this.setState("recaptchaResponse", recaptchaToken);
  // }

    return (
      <div className="box">
        <h3>Bestel Formulier</h3>
        <div>
          {errors && <p className="error">{errors}</p>}
          <form onSubmit={onSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>Voornaam:</td>
                  <td>
                    <input
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Achternaam:</td>
                  <td>
                    <input
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Straat:</td>
                  <td>
                    <input
                      type="text"
                      name="street"
                      value={values.street}
                      onChange={onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Huisnummer:</td>
                  <td>
                    <input
                      type="number"
                      name="housenr"
                      value={values.housenr}
                      onChange={onChange}
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
                      value={values.postcode}
                      onChange={onChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Woonplaats:</td>
                  <td>
                    <input
                      type="text"
                      name="city"
                      value={values.city}
                      onChange={onChange}
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
                      value={values.opmerkingen}
                      onChange={onChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <ReCaptcha
              ref={el => {
                this.captchaDemo = el;
              }}
              size="normal"
              render="explicit"
              sitekey="6LfwkeUUAAAAAEh1d4t9raRkM4oie6emRi4fiIDI"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            /> */}
            <input
              style={{ marginLeft: "125px"}}
              className="formButton"
              type="submit"
              value="Bestel"
              disabled={
                cartItems.length === 0 ? true :( !values.firstName || !values.lastName || !values.street || !values.housenr || !values.city || !values.postcode || !values.email)
                  ? true
                  : false 
                }
            />
            <button className="formButton" onClick={() => reset}>
              <i className="fas fa-times"></i>
              Wis alles
            </button>
          </form>
        </div>
        {/* <OrderInfo /> */}
        <SendInfo />
      </div>
    );
  }

