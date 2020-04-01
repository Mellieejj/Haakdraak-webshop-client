import React, { Component } from "react";

export default class SendInfo extends Component {
  state = {
    sendToggle: false
  };

  toggle = () => {
    if (this.state.sendToggle === false) {
      this.setState({
        sendToggle: true
      });
    } else {
      this.setState({
        sendToggle: false
      });
    }
  };
  render() {
    return (
      <div>
        {!this.state.sendToggle ? (
          <p>
            <i className="fas fa-chevron-right" onClick={this.toggle}></i>{" "}
            <span className="info">Verzend informatie</span>
          </p>
        ) : (
          <p>
            <i className="fas fa-chevron-down" onClick={this.toggle}></i>{" "}
            <span className="info">Verzend informatie </span>
            <p>
              Binnen 2-3 weken probeer ik de bestelling te versturen, heb ik
              meerdere bestellingen lopen en ik veel speciaal aan het haken ben,
              dan kan dit iets langer zijn. Ik doe mijn best het zo snel
              mogelijk te versturen!{" "}
            </p>
            <p className="tijdelijk">
              De levertijd is tijdelijk langer ivm studie. Vanaf eind april ga
              ik weer op bestelling haken. Alles wat ik heb liggen, kan ik
              binnen een week verzenden.
            </p>
          </p>
        )}
      </div>
    );
  }
}
