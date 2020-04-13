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

    const totalPrice = !products
      ? null
      : products.reduce((prevValue, currentValue) => {
          const price = parseFloat(currentValue.price);
          const quantity = currentValue.order_product.quantity;
          const total = price * quantity;
          console.log(total, "total");
          return (Number(prevValue) + Number(total)).toFixed(2);
        }, 0);

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
              {street} {housenr}
              <br />
              {postcode} {city}
              <br />
             E-mail: {email}
              <br />
            </p>
          </div>
          <div className="box">
            <h3>Producten & Opmerkingen</h3>
            <div>
              <p>{opmerkingen}</p>
              {!products ? (
                <p>Laden...</p>
              ) : (
                products.map((product) => {
                  return (
                    <p key={product.id}>
                      {product.name} {product.order_product.quantity}x €{" "}
                      {product.price}
                    </p>
                  );
                })
              )}
              <p>Totale prijs: € {totalPrice}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
