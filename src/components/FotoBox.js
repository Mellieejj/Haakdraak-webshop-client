import React, { Component } from "react";

export default class FotoBox extends Component {
  render() {
    const url = "http://www.haakdraak.nl/afbeeldingen";
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
      <div className="box">
        <div className="grid" style={{ marginTop: "20%" }}>
          {imagesgrid}
        </div>
      </div>
    );
  }
}
