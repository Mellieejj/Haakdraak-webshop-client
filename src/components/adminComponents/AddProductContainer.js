import React, { useState } from "react";

export default function AddProductContainer() {
  const initialFields = {
    name: "",
    price: "",
    description: "",
    size: "",
    optioneel: "",
    stock: null,
    categorieId: null,
  };

  const [fields, setFields] = useState(initialFields)

  
  return (
    <div>
      <AddProduct values={this.state} />
    </div>
  );
}
