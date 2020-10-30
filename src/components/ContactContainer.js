import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactContainer() {
  return (
    <div>
      <section className="top-product">
        <div className="page-title">
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
