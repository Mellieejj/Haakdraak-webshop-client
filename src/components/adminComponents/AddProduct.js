import React, { Component } from "react";

export default class AddProduct extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <input
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Product Naam"
          name="name"
          value={this.props.values.name}
          onChange={this.props.onChange}
        />
        <input
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Prijs"
          name="price"
          value={this.props.values.price}
          onChange={this.props.onChange}
        />
        <textarea
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Beschrijving"
          name="description"
          value={this.props.values.description}
          onChange={this.props.onChange}
        />
        <input
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Formaat"
          name="size"
          value={this.props.values.size}
          onChange={this.props.onChange}
        />
        <input
          className="form-control form-control-lg custom-form"
          type="text"
          placeholder="Optionele opties"
          name="optioneel"
          value={this.props.values.optioneel}
          onChange={this.props.onChange}
        />
        <input
          className="form-control form-control-lg custom-form"
          type="number"
          placeholder="Voorraad"
          name="stock"
          value={this.props.values.stock}
          onChange={this.props.onChange}
        />
        <select name="categorieId">
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
          {this.props.buttonName}
        </button>
      </form>
    );
  }
}
