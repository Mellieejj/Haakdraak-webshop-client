import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, cartAdd, filterSearch } from "../actions/productActions";

import ProductBox from "./ProductBox";

class ProductListContainer extends Component {
  state = {
    categorieFilter: ""
  };

  componentDidMount() {
    this.props.getProducts();
  }

  clickHandler = id => {
    this.props.cartAdd(id);
  };

  handleFilter = event => {
    if (event.target.value === "all") {
      this.props.getProducts();
      this.setState({ categorieFilter: "all" });
    } else {
      this.props.filterSearch(event.target.value);
      this.setState({ categorieFilter: event.target.value });
    }
  };

  render() {
    return (
      <div>
        <section className="top-product">
          <div className="productnaam">
            <h2>Producten</h2>
          </div>
          <div className="filter">
            <label>Filter producten:</label>

            <select id="categorie" onChange={this.handleFilter}>
              <option value="all">Alle Producten</option>
              <option value={"Bijtringen & Rammelaars"}>
                {"Bijtringen & Rammelaars"}
              </option>
              <option value="Baby Overige">Baby Overige</option>
              <option value="Knuffels">Knuffels</option>
              <option value="Sleutelhangers">Sleutelhangers</option>
              <option value="Overige">Overige</option>
            </select>
          </div>
          <ProductBox
            products={
              this.props.filter.length === 0 ||
              this.state.categorieFilter === "all" ||
              this.state.categorieFilter === ""
                ? this.props.products
                : this.props.filter
            }
            clickHandler={this.clickHandler}
          />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.products.products);
  return {
    products: state.products.products,
    filter: state.products.filter
  };
}

const mapDispatchToProps = { getProducts, cartAdd, filterSearch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
