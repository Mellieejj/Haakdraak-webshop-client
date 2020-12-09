import React from "react";
import Accordion from "./Accordion";
import {orderInfo, sendInfo} from '../data/info'

// import OrderInfo from "./OrderInfo";
// import SendInfo from "./SendInfo";

export default function ContactInfo() {
  

 

  return (
    <div className="box">
      <h2 className="box__title">Bestellingen</h2>
      <div className="box__content">
        <p>Producten die hier op de site staan, maak ik graag op bestelling.</p>
        <p>
          Staat je kleur, dier of ander idee er niet tussen, dat kan, er is ook
          zo veel leuks te maken! Stuur dan even een mailtje of via het
          contactformulier een berichtje met jouw idee, dier, kleur, of andere
          opmerking. Ook kun je op die manier een bestelling plaatsen.
        </p>

        <p>
          Bestellingen die ik speciaal voor jou maak kunnen geplaatst worden via
          het contactformulier. Een email met je wensen kan ook. Dan bespreken
          we samen de mogelijkheden en de kosten.
        </p>
      </div>
      <Accordion title={orderInfo.title} description={orderInfo.description} />
      <Accordion title={sendInfo.title} description={sendInfo.description} />
    </div>
  );
}
