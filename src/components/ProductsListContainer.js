import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, cartAdd } from "../actions/productActions";

import ProductBox from "./ProductBox";

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  clickHandler = id => {
    this.props.cartAdd(id);
  };

  render() {
    return (
      <div>
        <section className="top-product">
          <div className="productnaam">
            <h2>Producten</h2>
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
  // console.log(state.products);
  return {
    products: state.products.products
  };
}

const mapDispatchToProps = { getProducts, cartAdd };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
