import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, cartAdd } from "../actions/productActions";

import ProductBox from "./ProductBox";

class ProductListContainer extends Component {
  state = {
    show: "all"
  };

  componentDidMount() {
    this.props.getProducts();
  }

  clickHandler = id => {
    this.props.cartAdd(id);
  };
  filter = value => {
    this.setState({
      show: value
    });
  };
  render() {
    return (
      <div>
        <section className="top-product">
          <div className="productnaam">
            <h2>Producten</h2>
          </div>
          <div className="filter">
            <label for="categorie">Filter producten:</label>

            <select id="categorie" onChange={() => this.filter}>
              <option value="all">Alle Producten</option>
              <option value={"Bijtringen & Rammelaars"}>
                {"Bijtringen & Rammelaars"}
              </option>
              <option value="Baby Overige">Baby Overige</option>
              <option value="Knuffels">Knuffels</option>
              <option value="Sleutelhangers">Sleutelhangers</option>
              <option value="Sleutelhangers">Overige</option>
            </select>
          </div>
          <ProductBox
            products={this.props.products}
            clickHandler={this.clickHandler}
          />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products.products
  };
}

const mapDispatchToProps = { getProducts, cartAdd };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
