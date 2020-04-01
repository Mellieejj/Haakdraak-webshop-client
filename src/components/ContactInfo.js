import React, { Component } from "react";
import OrderInfo from "./OrderInfo";
import SendInfo from "./SendInfo";

export default class ContactInfo extends Component {
  render() {
    return (
      <div className="box">
        <h3>Bestellingen</h3>
        <p>Producten die hier op de site staan, maak ik graag op bestelling.</p>
        <p>
          Staat je kleur, dier of ander idee er niet tussen, dat kan, er is ook
          zo veel leuks te maken! Stuur dan even een mailtje of via het
          contactformulier een berichtje met jouw idee, dier, kleur, of andere
          opmerking. Ook kun je op die manier een bestelling plaatsen.
        </p>

        <p>
          Bestellingen die ik speciaal maak voor jou kunnen geplaatst worden via
          het contactformulier of stuur een mail. Dan bespreken we samen de
          mogelijkheden en kosten.
        </p>
        <OrderInfo />
        <SendInfo />
      </div>
    );
  }
}
