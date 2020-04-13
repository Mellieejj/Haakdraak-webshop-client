import React, { Component } from "react";

export default class OrderDetails extends Component {
  render() {
    const {firstName, lastName, street} = this.props
    return (
      <div>
        <div className="pagina-naam">
          <h2>Details van bestelling</h2>
        </div>
        <div>
          <p>
            {firstName}{" "}{lastName}<br />
            {street}
          </p>
        </div>
      </div>
    );
  }
}
