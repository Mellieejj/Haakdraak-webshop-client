import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProduct, cartAdd } from "../actions/productActions";

import ProductDetails from "./ProductDetails";

class ProductDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadProduct(this.props.match.params.productId);
  }

  clickHandler = id => {
    this.props.cartAdd(id);
  };

  render() {
    console.log("hallo", this.props.history);

    return (
      <div>
        <ProductDetails
          product={this.props.product}
          history={this.props.history}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("productdetailscontainer", state.product);

  return {
    product: state.product
  };
}

const mapDispatchToProps = { loadProduct, cartAdd };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsContainer);
