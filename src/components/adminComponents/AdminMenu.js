import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class AdminMenu extends Component {
  render() {
    return (
      <div>
        <div className="pagina-naam">
          <h2>Admin</h2>
        </div>
        <div className="boxes">
          {/* <Link to="/admin/producten"> */}
            <div className="box">
            <h3>Producten</h3>
            <p>Binnenkort: Producten toevoegen en/of aanpassen</p>
          </div>
          {/* </Link> */}
          <Link to="/admin/orders">
          <div className="box">
            <h3>Bestellingen</h3>
            <p>Alle bestellingen in zien</p>
          </div>
          </Link>
        </div>
   
      </div>
    );
  }
}
