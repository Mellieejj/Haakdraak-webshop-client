import React, { Component } from "react";
import FotoContainer from "./FotoContainer";
import TextBox from "./TextBox";
import FotoBox from "./FotoBox";

export default class Homepage extends Component {
  render() {
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
}
