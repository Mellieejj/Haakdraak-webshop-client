import React, { Component } from "react";

export default class OrderInfo extends Component {
  state = {
    orderToggle: false,
  };

  toggle = () => {
    if (this.state.orderToggle === false) {
      this.setState({
        orderToggle: true,
      });
    } else {
      this.setState({
        orderToggle: false,
      });
    }
  };
  render() {
    return (
      <div>
        {!this.state.orderToggle ? (
          <p><span onClick={this.toggle}>
            <i className="fas fa-chevron-right" onClick={this.toggle}>{" "}
            <span className="info">Informatie Bestellingen</span></i></span>
          </p>
        ) : (
          <p><span onClick={this.toggle}>
            <i className="fas fa-chevron-down" >{" "}
            <span className="info">Informatie Bestellingen</span></i></span>
            <br /> Bestellingen van producten die op site staan kunnen worden
            besteld via de winkelwagen knop en dan even het bestelformulier in
            te vullen. Wil je een andere kleur combinatie dan op de foto staat
            of als er meerdere kleuren op de foto staan, vermeld dan even bij
            opmerkingen per product in welke kleur je het wilt. Na ontvangst van
            de bestelling neem ik zo snel mogelijk contact met je op over de
            betaling.
          </p>
        )}
      </div>
    );
  }
}
