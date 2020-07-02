import React from "react";
import AddProductContainer from "./AddProductContainer";

export default function ProductChanging() {
  return (
    <div className="box">
      <p>Product toevoegen</p>
      <AddProductContainer />

      <p>Product wijzigen</p>
    </div>
  );
}
