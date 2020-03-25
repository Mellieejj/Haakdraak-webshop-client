import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TextBox extends Component {
  render() {
    return (
      <div className="box">
        <h3>Welkom!</h3>
        <p>Gehaakte knuffels, kraamcadeautjes en meer.</p>
        <p>
          Alle producten op deze site zijn voorbeelden van de gehaakte producten
          die ik al eerder gemaakt heb. Alles wordt op bestelling gemaakt en kan
          dus naar eigen wensen aangepast worden.
        </p>
        <p>
          Veel van mijn creaties kun je hier op de site terug vinden. Op{" "}
          <Link to="http://www.instagram.com/haakdraakie">instagram</Link> staan
          nog meer foto's van mijn gehaakte beestenboel en bestellingen van
          andere klanten. Deze kunnen ook speciaal voor je gehaakt worden.
        </p>
        <p>
          Heb je zelf een idee, of heb je iets leuks voorbij zien komen wat niet
          tussen mijn foto's staan, neem even contact op via het
          contactformulier of stuur een mailtje, dan kijken wij samen verder
          voor een eventuele bestelling.
        </p>
        <p className="tijdelijk">
          Tijdelijk maak ik niets op bestelling. Als je iets wilt en ik heb het
          op voorraad kan het besteld worden. Half april denk ik weer op
          bestelling te kunnen haken. Als de bestelling geen haast heeft (eind
          april / half mei geleverd) kan de bestelling wel geplaatst worden.
        </p>
      </div>
    );
  }
}
