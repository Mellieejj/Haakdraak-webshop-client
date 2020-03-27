import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    //total price of cart items
    const totalPrice = this.props.cartItems
      ? this.props.cartItems.reduce((prevValue, currentValue) => {
          const numberPrice = parseFloat(currentValue.price);
          const priceQuantity = numberPrice * currentValue.quantity;
          return (Number(priceQuantity) + Number(prevValue)).toFixed(2);
        }, 0)
      : null;
    // total items of cart
    const countCart = this.props.cartItems.reduce((lastValue, newValue) => {
      return lastValue + newValue.quantity;
    }, 0);

    return (
      <div className="box">
        <h2>Winkelwagen</h2>

        {this.props.cartItems.length === 0 ? (
          <p>Er zijn geen producten toegevoegd aan uw winkelwagen!</p>
        ) : (
          <div>
            <table className="cart">
              <thead>
                <tr>
                  <td>Product</td>
                  <td>Prijs</td>
                  <td>Aantal</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {this.props.cartItems.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>€ {item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <i
                          onClick={() => this.props.addToCart(item.id)}
                          className="fas fa-plus-circle"
                        ></i>{" "}
                        <i
                          onClick={() => this.props.subtractFromCart(item.id)}
                          className="fas fa-minus-circle"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td>Totaal:</td>
                  <td>€ {totalPrice}</td>
                  <td>{countCart}</td>
                </tr>
              </tfoot>
            </table>
            <div
              style={{ float: "right", marginTop: "10px", color: "#32a093" }}
              className="dropdown__hover"
              onClick={() => this.props.clearCart()}
            >
              <i class="fas fa-times"></i> Leeg wagentje
            </div>
          </div>
        )}
      </div>
    );
  }
}
