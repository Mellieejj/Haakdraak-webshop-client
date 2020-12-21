import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__box">
        <p className="footer__box-text">
          Gehaakte knuffels, <br />
          kraamcadeautjes en meer!
        </p>
      </div>
      <div className="footer__box">
        <a
          className="footer__box-social"
          target="_blank"
          href="http://www.facebook.com/haakdraakie"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square fa-3x"></i>
        </a>{" "}
        <a
          className="footer__box-social"
          target="_blank"
          href="http://www.instagram.com/haakdraakie"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-3x"></i>
        </a>
      </div>
      <div className="footer__box">
        <p className="footer__box-text">E-mail: <a className="footer__link" href="mailto:melanie@haakdraak.nl">Melanie@haakdraak.nl</a></p>
      </div>
    </div>
  );
}
