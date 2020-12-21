import React, { useState } from "react";
import "../style/components/accordion.scss";

export default function Accordion({ title, description }) {
  const [toggle, setToggle] = useState(false);
  const arrowClass = toggle ? "down" : "right";

  const descriptionParagraphs = description.split("\n").map((text, i) => (
    <p key={i} className="c-accordion__description-par">
      {text}
    </p>
  ));
  return (
    <details
      className="c-accordion"
      open={toggle}
      onToggle={() => setToggle(!toggle)}
    >
      <summary className="c-accordion__title">
        <i className={`fas fa-chevron-${arrowClass}`}></i>
        {title}
      </summary>
      <div className="c-accordion__description">{descriptionParagraphs}</div>
    </details>
  );
}
