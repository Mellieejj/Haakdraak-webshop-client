import emailjs from "emailjs-com";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutFormContainer({cartItems, clearCart, errors}) {
  const initialFields = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    housenr: "",
    postcode: "",
    city: "",
    opmerkingen: "",
  };

  const [fields, setFields] = useState(initialFields);
  const [sent, setSent] = useState(false);
  const dispatch = useDispatch();

  const onChange = (event) => {
    setFields({...fields, [event.target.name]: event.target.value});
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const totalPrice =
      cartItems &&
      cartItems.reduce((prevValue, currentValue) => {
        const numberPrice = parseFloat(currentValue.price);
        const priceQuantity = numberPrice * currentValue.quantity;
        return (Number(priceQuantity) + Number(prevValue)).toFixed(2);
      }, 0);

    // dispatch(
    //   createOrder({
    //     form: fields,
    //     items: cartItems,
    //   })
    // );

    const {
      firstName,
      lastName,
      email,
      street,
      housenr,
      postcode,
      city,
      opmerkingen,
    } = fields;

    const formOrder = {
      firstName,
      lastName,
      email,
      street,
      housenr,
      postcode,
      city,
      opmerkingen,
      cartItems: cartItems
        .map((item) => item.name + " " + item.quantity + "x")
        .join("<br />"),
      totalPrice,
    };

    emailjs
      .send(
        "smtp_server",
        "bestel_form",
        formOrder,
        "user_4XE8EaLYpu2i37GtsnZ5k"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .then(setSent(true))
      .then(setFields(initialFields))
      .then(clearCart());
  };

  const reset = (event) => {
    event.preventDefault();
    setFields(initialFields);
    setSent(false);
  };

  return (
    <CheckoutForm
      onSubmit={onSubmit}
      onChange={onChange}
      values={fields}
      reset={reset}
      errors={errors}
      cartItems={cartItems}
      sent={sent}
    />
  );
}
