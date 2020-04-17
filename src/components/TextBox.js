import React, { Component } from "react";

export default class TextBox extends Component {
  render() {
    return (
      <div className="box">
        <h3>Welkom!</h3>
        <p>Gehaakte knuffels, kraamcadeautjes en meer.</p>
        <p>
          Ik vind haken naast mijn sportieve hobby een heerlijke ontspanning.
          Lekker op de bank met een haakwerkje. Ik haak van alles van rammelaars
          tot knuffels en mutsen, kleedjes en omslagdoeken. Alle producten op
          deze site zijn voorbeelden van de gehaakte producten die ik al eerder
          gemaakt heb. Alles wordt op bestelling gemaakt en kan dus naar eigen
          wensen en ideeën aangepast worden.
        </p>
        <p>
          Veel van mijn creaties kun je hier op de site terug vinden. Op{" "}
          <a
            target="_blank"
            href="http://www.instagram.com/haakdraakie"
            rel="noopener noreferrer"
          >
            instagram
          </a>{" "}
          staan nog meer foto's van mijn gehaakte beestenboel en bestellingen
          van andere klanten. Deze kunnen ook speciaal voor je jou gehaakt
          worden.
        </p>
        <p>
          Heb je zelf een idee, of heb je iets leuks voorbij zien komen dat niet
          tussen mijn foto's staat, neem even contact op via het
          contactformulier of stuur een mailtje. Dan kijken wij samen verder
          voor een eventuele bestelling.
        </p>
      </div>
    );
  }
}
