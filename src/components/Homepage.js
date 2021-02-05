import React from "react";
import MainPhoto from "./MainPhoto";
import TextBox from "./TextBox";
import FotoBox from "./FotoBox";

export default function Homepage() {
  return (
    <div>
      <MainPhoto />
      <div className="boxes">
        <TextBox />
        <FotoBox />
      </div>
    </div>
  );
}
