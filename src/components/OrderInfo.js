import React, { useState } from "react";

export default function OrderInfo() {
  const [orderToggle, setOrderToggle] = useState(false);

  const toggle = () => {
    if (orderToggle === false) {
      setOrderToggle(true);
    } else {
      setOrderToggle(false);
    }
  };

  return (
    <div>
      {!orderToggle ? (
        <>
          <span onClick={toggle}>
            <span className="info">
              <i className="fas fa-chevron-right"></i>
              Informatie Bestellingen
            </span>
          </span>
        </>
      ) : (
        <>
          <span onClick={toggle}> 
            <span className="info info--open">
              <i className="fas fa-chevron-down"></i>
              Informatie Bestellingen
            </span>
          </span>
          <p>
            Bestellingen van producten die op site staan kunnen worden
            besteld via de winkelwagen knop en dan even het bestelformulier in te
            vullen. Wil je een andere kleur combinatie dan op de foto staat of als
            er meerdere kleuren op de foto staan, vermeld dan even bij opmerkingen
            per product in welke kleur je het wilt. Na ontvangst van de bestelling
            neem ik zo snel mogelijk contact met je op over de betaling.
          </p>
        </>
      )}
    </div>
  );
}
