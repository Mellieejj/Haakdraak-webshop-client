import React from "react";
import OrderInfo from "./OrderInfo";
import SendInfo from "./SendInfo";

export default function ContactInfo() {
  return (
    <div className="box">
      <h3>Bestellingen</h3>
      <p>Producten die hier op de site staan, maak ik graag op bestelling.</p>
      <p>
        Staat je kleur, dier of ander idee er niet tussen, dat kan, er is ook zo
        veel leuks te maken! Stuur dan even een mailtje of via het
        contactformulier een berichtje met jouw idee, dier, kleur, of andere
        opmerking. Ook kun je op die manier een bestelling plaatsen.
      </p>

      <p>
        Bestellingen die ik speciaal voor jou maak kunnen geplaatst worden via
        het contactformulier. Een email met je wensen kan ook. Dan bespreken we
        samen de mogelijkheden en de kosten.
      </p>
      <OrderInfo />
      <SendInfo />
    </div>
  );
}
