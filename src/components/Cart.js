import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    //total price of cart items
    const totalPrice = this.props.cartItems
      ? this.props.cartItems.reduce((prevValue, currentValue) => {
          const numberPrice = parseFloat(currentValue.price);
          const priceQuantity = numberPrice * currentValue.quantity;
          return (Number(priceQuantity) + Number(prevValue)).toFixed(2)
        }, 0)
      : null;

    return (
      <div className="box">
        <h3>Your Cart</h3>

        {this.props.cartItems.length === 0 ? (
          <p>Er zijn geen producten toegevoegd aan u winkelwagen!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <td>Product</td>
                <td>Prijs</td>
                <td>Aantal</td>
              </tr>
            </thead>
            <tbody>
              {this.props.cartItems.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>€ {item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Totaal:</td>
                <td>€ {totalPrice}</td>
                <td>total items</td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    );
  }
}
