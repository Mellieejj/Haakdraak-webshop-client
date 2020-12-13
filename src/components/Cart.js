import React from "react";

export default function Cart(props) {
  const { cartItems, addToCart, subtractFromCart, clearCart } = props;
  //total price of cart items
  const totalPrice =
    cartItems &&
    cartItems.reduce((prevValue, currentValue) => {
      const numberPrice = parseFloat(currentValue.price);
      const priceQuantity = numberPrice * currentValue.quantity;
      return (Number(priceQuantity) + Number(prevValue)).toFixed(2);
    }, 0);
  // total items of cart
  const countCart = cartItems.reduce((lastValue, newValue) => {
    return lastValue + newValue.quantity;
  }, 0);

  return (
    <div className="box">
      <h2 className="box__title">Winkelwagen</h2>
      {cartItems.length === 0 ? (
        <p>Er zijn geen producten toegevoegd aan uw winkelwagen!</p>
      ) : (
        <div className="cart">
          {cartItems.map((item) => {
            console.log(item);
            return (
              <div className="cart__item" key={item.id}>
                <div className="cart__item-row">
                  <span className="cart__item-title">{item.name}</span>
                </div>

                <div className="cart__item-row cart__item-row--price">
                  <span>€ {item.price}</span>
                  <span>
                    {item.quantity} x{" "}
                    <i
                      onClick={() => addToCart(item.id)}
                      className="fas fa-plus-circle cart__item-btn"
                    ></i>
                    <i
                      onClick={() => subtractFromCart(item.id)}
                      className="fas fa-minus-circle cart__item-btn"
                    ></i>
                  </span>
                </div>
              </div>
            );
          })}
          <div className="cart__row--total">
            <span>
              Totaal aantal producten: {countCart}
              <br />
              Totaal bedrag: € {totalPrice} 
            </span>
            <button className="formButton" onClick={() => clearCart()}>
              <i className="fas fa-times"></i> Leeg wagentje
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
