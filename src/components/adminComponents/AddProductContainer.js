import React, { useState } from "react";
import AddProduct from "./AddProduct";

export default function AddProductContainer() {
  const initialFields = {
    name: "",
    price: "",
    description: "",
    size: "",
    optioneel: "",
    stock: 0,
    categorie: "",
  };

  const [fields, setFields] = useState(initialFields);

  const onChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit", fields);
  };

  return (
    <div>
      <AddProduct
        values={fields}
        buttonName="verzenden"
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  );
}
