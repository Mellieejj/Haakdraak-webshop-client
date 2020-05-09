import React, { useState } from "react";

export default function SendInfo() {
  const [sendToggle, setSendToggle] = useState(false);

  const toggle = () => {
    if (sendToggle === false) {
      setSendToggle(true);
    } else {
      setSendToggle(false);
    }
  };

  return (
    <div>
      {!sendToggle ? (
        <p>
          <span onClick={toggle}>
            <i className="fas fa-chevron-right">
              {" "}
              <span className="info">Verzend informatie </span>
            </i>
          </span>
        </p>
      ) : (
        <p>
          <span onClick={toggle}>
            <i className="fas fa-chevron-down">
              {" "}
              <span className="info">Verzend informatie </span>
            </i>
          </span>
          <p>
            Alle producten die op voorraad zijn, kan ik binnen een week
            verzenden.
          </p>
          <p>
            Producten die hier op de site staan, maak ik graag op bestelling. De
            levertijd is ongeveer 2-3 weken. De producten die je hier op de site
            vindt, zijn voorbeelden die ik al een keer gemaakt heb. Dit kan
            allemaal aangepast worden aan je eigen voorkeuren en ideeën.
          </p>
          <p>
            Binnen 2-3 weken probeer ik de bestelling te versturen. Heb ik
            meerdere bestellingen lopen of ben ik veel speciaals aan het haken,
            dan kan dit iets langer zijn. Ik doe mijn best het zo snel mogelijk
            te versturen!{" "}
          </p>
          <p>
            Wanneer de bestelling verzonden moet worden zijn de verzendkosten
            voor jou. De verzendkosten zijn €6,95. Ophalen is ook een
            mogelijkheid, dit kunnen we samen bespreken.
          </p>
        </p>
      )}
    </div>
  );
}
