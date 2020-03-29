import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProduct } from "../actions/productActions";

import ProductDetails from "./ProductDetails";

class ProductDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadProduct(this.props.match.params.productId);
  }

  render() {
    return (
      <div>
        <ProductDetails product={this.props.product} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    product: state.product
  };
}

const mapDispatchToProps = { loadProduct };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsContainer);
