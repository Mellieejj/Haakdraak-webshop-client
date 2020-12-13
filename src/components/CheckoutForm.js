import React from "react";
// import { ReCaptcha } from "react-recaptcha-google";

export default function CheckoutForm(props) {
  const { errors, onSubmit, values, onChange, cartItems, reset } = props;
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
      <h2 className="box__title">Bestelformulier</h2>
      {errors && <p className="error">{errors}</p>}
      <form className="c-form" onSubmit={onSubmit} onReset={reset}>
        <div className="c-form-group">
          <div className="c-form-group__left">Voornaam:</div>
          <div className="c-form-group__right">
            <input
              className="o-input__field"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Achternaam:</div>
          <div className="c-form-group__right">
            <input
              className="o-input__field"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Email:</div>
          <div className="c-form-group__right">
            <input
              className="o-input__field"
              type="email"
              name="email"
              value={values.email}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Straat:</div>
          <div className="c-form-group__right">
            <input
              className="o-input__field"
              type="text"
              name="street"
              value={values.street}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Huisnummer:</div>
          <div className="c-form-group__right">
            <input
              className="o-input__field"
              type="number"
              name="housenr"
              value={values.housenr}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Postcode:</div>
          <div className="c-form-group__right">
            <input
              className="o-input__field"
              type="text"
              name="postcode"
              // pattern="[0-9]{4}[A_Z]{2}"
              value={values.postcode}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Woonplaats:</div>
          <div className="c-form-group__right">
            <input
              className="o-input__field"
              type="text"
              name="city"
              value={values.city}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Opmerkingen:</div>
          <div className="c-form-group__right">
            <textarea
              type="text"
              className="o-input__textarea"
              name="opmerkingen"
              rows={10}
              value={values.opmerkingen}
              onChange={onChange}
            />
          </div>
        </div>
        {/* <div className="c-form-group">
            <div className="c-form-group__left"></div>
            <div className="c-form-group__right">
            <ReCaptcha
              ref={el => {
                this.captchaDemo = el;
              }}
              size="normal"
              render="explicit"
              sitekey="6LfwkeUUAAAAAEh1d4t9raRkM4oie6emRi4fiIDI"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            />
            </div>
          </div> */}
        <div className="c-form-group">
          <div className="c-form-group__left">
            <button className="formButton" type="reset">
              <i className="fas fa-times"></i>
              {" "}Wis alles
            </button>
          </div>
          <div className="c-form-group__right">
            <input
              className="formButton"
              type="submit"
              value="Bestellen"
              disabled={
                cartItems.length === 0
                  ? true
                  : !values.firstName ||
                    !values.lastName ||
                    !values.street ||
                    !values.housenr ||
                    !values.city ||
                    !values.postcode ||
                    !values.email
                  ? true
                  : false
              }
            />
          </div>
        </div>
      </form>
    </div>
  );
}
