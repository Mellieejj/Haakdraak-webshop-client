import React, { Component } from "react";
import emailjs from "emailjs-com";
import { ReCaptcha } from "react-recaptcha-google";

export default class ContactForm extends Component {
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
        <form className="contact-form" onSubmit={this.sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
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
          <input type="submit" value="Send" />
          <input type="reset" value="Reset" />
        </form>
      </div>
    );
  }
}
