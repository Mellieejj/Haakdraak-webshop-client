import React from "react";
import FotoContainer from "./FotoContainer";
import TextBox from "./TextBox";
import FotoBox from "./FotoBox";

export default function Homepage () {
    return (
      <div>
        <FotoContainer />
        <div className="boxes">
          <TextBox />
          <FotoBox />
        </div>
      </div>
    );
  }

