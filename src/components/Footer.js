import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            style={{ marginLeft: "220px", marginTop: "10px" }}
          >
            <Link to="http://www.facebook.com/haakdraakie">
              <i class="fab fa-facebook fa-3x"></i>
            </Link>{" "}
            <Link to="http://www.instagram.com/haakdraakie">
              <i class="fab fa-instagram fa-3x"></i>
            </Link>
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
