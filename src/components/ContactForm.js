import React, { Component } from "react";
import emailjs from "emailjs-com";
// import { ReCaptcha } from "react-recaptcha-google";

export default class ContactForm extends Component {
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

  sendEmail = event => {
    event.preventDefault();
    emailjs
      .sendForm(
        "smtp_server",
        "contact_form",
        event.target,
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
  };

  render() {
    return (
      <div className="box">
        <h3>Contact Formulier</h3>
        <div>
          <form className="contact-form" onSubmit={this.sendEmail}>
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
                    <input type="reset" value="Reset" />
                  </td>
                  <td>
                    <input type="submit" value="Send" />
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
