import React, { Component } from "react";
import emailjs from "emailjs-com";

export default class ContactForm extends Component {
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
          <div
            className="g-recaptcha"
            data-sitekey="6Leof-UUAAAAANo8PrVrmrDcZRqPhxNrNLFM-BjP"
          ></div>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}
