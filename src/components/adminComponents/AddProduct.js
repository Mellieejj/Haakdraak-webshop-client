import React from "react";

export default function AddProduct (props) {
    return (
      <form onSubmit={props.onSubmit}>
        <input
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Product Naam"
          name="name"
          value={props.values.name}
          onChange={props.onChange}
        />
        <input
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Prijs"
          name="price"
          value={props.values.price}
          onChange={props.onChange}
        />
        <textarea
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Beschrijving"
          name="description"
          value={props.values.description}
          onChange={props.onChange}
        />
        <input
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Formaat"
          name="size"
          value={props.values.size}
          onChange={props.onChange}
        />
        <input
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Optionele opties"
          name="optioneel"
          value={props.values.optioneel}
          onChange={props.onChange}
        />
        <input
          className="form-control form-control-lg custom-form"
          type="number"
          placeholder="Voorraad"
          name="stock"
          value={props.values.stock}
          onChange={props.onChange}
        />
        <select name="categorie">
          <option value={"Bijtringen & rammelaars"}>
            {"Bijtringen & Rammelaars"}
          </option>
          <option value="Baby Overige">Baby Overige</option>
          <option value="Knuffels">Knuffels</option>
          <option value="Sleutelhangers">Sleutelhangers</option>
          <option value="Overige">Overige</option>
        </select>
        <button
          className="btn btn-outline-default btn-lg btn-dark"
          type="submit"
        >
          {props.buttonName}
        </button>
      </form>
    );
  }

