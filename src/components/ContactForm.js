import React, { useState } from "react";
import emailjs from "emailjs-com";
// import { ReCaptcha } from "react-recaptcha-google";

export default function ContactForm() {
  const [errorMessage, setErrorMessage] = useState();
  const [succesMessage, setSuccesMessage] = useState();
  const [sendMessage, setSendMessage] = useState();

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

  const sendEmail = (event) => {
    event.preventDefault();
    const name = event.target.user_name.value;
    const email = event.target.user_email.value;
    const message = event.target.message.value;

    setSuccesMessage();
    if (!name && !email && !message) {
      setErrorMessage("Vul de velden in.");
      return;
    }

    if (!name) {
      setErrorMessage("Vul je naam in.");
      return;
    }

    if (!email) {
      setErrorMessage("Vul je email in.");
      return;
    }

    if (!message) {
      setErrorMessage("Vul een bericht in.");
      return;
    }

    setErrorMessage();
    setSendMessage("Bericht wordt verzonden, even geduld.");
    emailjs
      .sendForm(
        "smtp_server",
        "contact_form",
        event.target,
        "user_4XE8EaLYpu2i37GtsnZ5k"
      )
      .then(
        (result) => {
          setSendMessage();
          setSuccesMessage("Bedankt voor je bericht!");
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          setSendMessage();
          setErrorMessage(
            `Er is iets misgegaan, je kunt een mail sturen naar melanie@haakdraak.nl.`
          );
          console.log(error.text);
        }
      );

    event.target.reset();
  };

  const message = errorMessage || succesMessage || sendMessage;
  const messageClass = errorMessage
    ? "error"
    : succesMessage
    ? "succes"
    : sendMessage
    ? "sending"
    : null;

  return (
    <div className="box">
      <h2 className="box__title">Contactformulier</h2>
      {message && <div className={messageClass}>{message}</div>}

      <form className="c-form" onSubmit={sendEmail}>
        <div className="c-form-group">
          <div className="c-form-group__left">Naam:</div>
          <div className="c-form-group__right">
            <input className="o-input__field" type="text" name="user_name" />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">E-mail:</div>
          <div className="c-form-group__right">
            <input className="o-input__field" type="email" name="user_email" />
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Vraag / Bestelling:</div>
          <div className="c-form-group__right">
            <label className="o-input__radio-label">
              <input
                className="o-input__radio"
                type="radio"
                name="vraag-order"
                value="vraag"
              />
              Vraag
            </label>
            <label className="o-input__radio-label">
              <input
                className="o-input__radio"
                type="radio"
                name="vraag-order"
                value="bestelling"
              />
              Bestelling
            </label>
          </div>
        </div>
        <div className="c-form-group">
          <div className="c-form-group__left">Bericht:</div>
          <div className="c-form-group__right">
            <textarea className="o-input__textarea" rows={10} name="message" />
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
              sitekey="6Leof-UUAAAAANo8PrVrmrDcZRqPhxNrNLFM-BjP"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
              /> 
            </div>
        </div> */}

        <div className="c-form-group c-form-group__buttons">
          <div className="c-form-group__left">
            <button type="reset" className="formButton" value="Reset">
              Reset
            </button>
          </div>
          <div className="c-form-group__right">
            <button type="submit" className="formButton" value="Send">
              Verzenden
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
