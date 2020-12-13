import React from "react";

export default function AddProduct({onSubmit, values, onChange, buttonName}) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className=""
        type="text"
        placeholder="Product Naam"
        name="name"
        value={values.name}
        onChange={onChange}
      />
      <input
        className=""
        type="text"
        placeholder="Prijs"
        name="price"
        value={values.price}
        onChange={onChange}
      />
      <textarea
        className=""
        type="text"
        placeholder="Beschrijving"
        name="description"
        value={values.description}
        onChange={onChange}
      />
      <input
        className=""
        type="text"
        placeholder="Formaat"
        name="size"
        value={values.size}
        onChange={onChange}
      />
      <input
        className=""
        type="text"
        placeholder="Optionele opties"
        name="optional"
        value={values.optional}
        onChange={onChange}
      />
      <input
        className=""
        type="number"
        placeholder="Voorraad"
        name="stock"
        value={values.stock}
        onChange={onChange}
      />
      <select
        name="category"
        value={values.category}
        onChange={onChange}
      >
        <option value="">Kies category</option>
        <option value={"Bijtringen & Rammelaars"}>
          {"Bijtringen & Rammelaars"}
        </option>
        <option value="Baby Overige">Baby Overige</option>
        <option value="Knuffels">Knuffels</option>
        <option value="Sleutelhangers">Sleutelhangers</option>
        <option value="Overige">Overige</option>
      </select>

      <button className="" type="submit">
        {buttonName}
      </button>
    </form>
  );
}
