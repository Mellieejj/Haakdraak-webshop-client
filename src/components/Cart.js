import React from "react";

export default function Cart(props) {
  //total price of cart items
  const totalPrice = props.cartItems
    ? props.cartItems.reduce((prevValue, currentValue) => {
        const numberPrice = parseFloat(currentValue.price);
        const priceQuantity = numberPrice * currentValue.quantity;
        return (Number(priceQuantity) + Number(prevValue)).toFixed(2);
      }, 0)
    : null;
  // total items of cart
  const countCart = props.cartItems.reduce((lastValue, newValue) => {
    return lastValue + newValue.quantity;
  }, 0);

  return (
    <div className="box">
      <h3>Winkelwagen</h3>
      {props.cartItems.length === 0 ? (
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
              {props.cartItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>€ {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
                      <i
                        onClick={() => props.addToCart(item.id)}
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
            style={{ float: "right" }}
            className="formButton"
            onClick={() => props.clearCart()}
          >
            <i className="fas fa-times"></i> Leeg wagentje
          </div>
        </div>
      )}
    </div>
  );
}
