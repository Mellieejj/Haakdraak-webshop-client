import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <section className="footbox">
        <div className="foot-nav">
          <div className="foot">
            <p>
              Gehaakte knuffels,
              <br /> kraamcadeautjes en meer!
            </p>
          </div>
          <div
            className="foot"
            style={{ marginLeft: "325px", marginTop: "10px" }}
          >
            <a
              target="_blank"
              href="http://www.facebook.com/haakdraakie"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-square fa-3x"></i>
            </a>{" "}
            <a
              target="_blank"
              href="http://www.instagram.com/haakdraakie"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </div>
          <div
            className="foot"
            style={{ marginLeft: "150px", marginTop: "10px" }}
          >
            <p>E-mail: Melanie@haakdraak.nl</p>
          </div>
        </div>
      </section>
    );
  }
}
