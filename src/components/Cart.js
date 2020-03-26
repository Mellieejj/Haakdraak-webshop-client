import React, { Component } from "react";

export default class Cart extends Component {
  render() {
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
          </table>
        )}
      </div>
    );
  }
}
