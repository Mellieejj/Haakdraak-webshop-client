import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default class ContactContainer extends Component {
  render() {
    return (
      <div>
        <section className="top-product">
          <div className="productnaam">
            <h2>Contact</h2>
          </div>
        </section>
        <div className="boxes">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    );
  }
}
