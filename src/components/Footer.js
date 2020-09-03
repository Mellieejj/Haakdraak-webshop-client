import React from "react";

export default function Footer() {
  return (
    <div className="foot-nav">
      <div className="foot-nav__box">
        <p className="foot-nav__box-text">
          Gehaakte knuffels, <br />
          kraamcadeautjes en meer!
        </p>
      </div>
      <div
        className="foot-nav__box"
        // style={{ marginLeft: "325px", marginTop: "10px" }}
      >
        <a
          className="foot-nav__box-social"
          target="_blank"
          href="http://www.facebook.com/haakdraakie"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square fa-3x"></i>
        </a>{" "}
        <a
          className="foot-nav__box-social"
          target="_blank"
          href="http://www.instagram.com/haakdraakie"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram fa-3x"></i>
        </a>
      </div>
      <div
        className="foot-nav__box"
        // style={{ marginLeft: "150px", marginTop: "10px" }}
      >
        <p class="foot-nav__box-text">E-mail: Melanie@haakdraak.nl</p>
      </div>
    </div>
  );
}
