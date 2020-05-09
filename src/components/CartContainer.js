import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import CheckoutFormContainer from "./CheckoutFormContainer";
import { cartAdd, cartSubtract, clearCart } from "../actions/productActions";

export default function CartContainer() {
  const errors = useSelector((state) => state.errors);
  const cart = useSelector(state => state.products.cart)
  const dispatch = useDispatch()

  const addToCartHandler = (id) => {
    dispatch(cartAdd(id));
  };

 const subtractFromCartHandler = (id) => {
    dispatch(cartSubtract(id));
  };

 const resetCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="boxes" style={{ marginTop: "25px" }}>
      <Cart
        cartItems={cart}
        addToCart={addToCartHandler}
        subtractFromCart={subtractFromCartHandler}
        clearCart={resetCart}
      />
      <CheckoutFormContainer
        cartItems={cart}
        errors={errors}
        clearCart={resetCart}
      />
    </div>
  );
}