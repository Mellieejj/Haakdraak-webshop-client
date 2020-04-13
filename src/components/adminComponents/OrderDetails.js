import React, { Component } from "react";
import moment from "moment";

export default class OrderDetails extends Component {
  render() {
    const {
      firstName,
      lastName,
      street,
      housenr,
      postcode,
      city,
      opmerkingen,
      email,
      createdAt,
      products,
    } = this.props.order;
    return (
      <div>
        <div className="pagina-naam">
          <h2>Details van bestelling</h2>
        </div>
        <div className="boxes">
          <div className="box">
            <h3>Gegevens</h3>
            <p>
              Datum geplaatst: {moment(createdAt).format("D MMM YYYY, HH:mm")}
             </p>
             <p>
              {firstName} {lastName}
              <br />
              {street}
              {housenr}
              <br />
              {postcode}
              {city}
              <br />
              {email}
              <br />
            </p>
          </div>
          <div className="box">
            <h3>Producten & Opmerkingen</h3>
            <div>
              <p>{opmerkingen}</p>
              {!products ? null: products.map((product) => {
                return (
                  <p key={product.id}>
                    {product.name} {product.order_product.quantity}x €{" "}
                    {product.price}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
