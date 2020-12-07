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
    // emailjs
    //   .sendForm(
    //     "smtp_server",
    //     "contact_form",
    //     event.target,
    //     "user_4XE8EaLYpu2i37GtsnZ5k"
    //   )
    //   .then(
    //     (result) => {
    //       setSendMessage();
    //       setSuccesMessage("Bedankt voor je bericht!");
    //       console.log("SUCCESS!", result.status, result.text);
    //     },
    //     (error) => {
    //       setSendMessage();
    //       setErrorMessage(
    //         `Er is iets misgegaan, je kunt een mail sturen naar melanie@haakdraak.nl.`
    //       );
    //       console.log(error.text);
    //     }
    //   );

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
      <h2 className="box__title">Contact Formulier</h2>
      <div className="contact">
        <div className={messageClass}>{message}</div>
        <form className="contact-form" onSubmit={sendEmail}>
          <table>
            <tbody>
              <tr>
                <td>Naam: </td>
                <td>
                  <input type="text" name="user_name" />
                </td>
              </tr>
              <tr>
                <td>Email: </td>
                <td>
                  <input type="email" name="user_email" />
                </td>
              </tr>
              <tr>
                <td>Vraag / Bestelling: </td>
                <td>
                  <input type="radio" name="vraag-order" value="vraag" />
                  Vraag
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input type="radio" name="vraag-order" value="bestelling" />
                  Bestelling
                </td>
              </tr>
              <tr>
                <td>Bericht:</td>
                <td>
                  <textarea name="message" />
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  {/* <ReCaptcha
                      ref={el => {
                        this.captchaDemo = el;
                      }}
                      size="normal"
                      render="explicit"
                      sitekey="6Leof-UUAAAAANo8PrVrmrDcZRqPhxNrNLFM-BjP"
                      onloadCallback={this.onLoadRecaptcha}
                      verifyCallback={this.verifyCallback}
                    /> */}
                </td>
              </tr>
              <tr>
                <td>
                  <button type="reset" className="formButton" value="Reset">Reset</button>
                </td>
                <td>
                  <button type="submit" className="formButton" value="Send">Verzenden</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
      </div>
    </div>
  );
}
