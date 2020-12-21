import React from "react";

export default function FotoBox() {
  const url = "https://www.haakdraak.nl/afbeeldingen";
  const images = [
    `${url}/box-guus.jpg`,
    `${url}/draakjes.jpg`,
    `${url}/kraal-dino.jpg`,
    `${url}/speen-draak.jpg`,
    `${url}/speen-koe.jpg`,
    `${url}/bijt-vos.jpg`,
    `${url}/sleutel-pingu.jpg`,
    `${url}/piep-guus.jpg`,
    `${url}/tut-olifant.jpg`,
    `${url}/sleutel-ananas.jpg`,
  ];

  const imagesgrid = images.map((image, i) => {
    return <img key={i} src={image} alt="" />;
  });
  return (
    <div className="box box-photo">
      <div className="photo-grid">
        {imagesgrid}
      </div>
    </div>
  );
}
