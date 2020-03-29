import React, { Component } from "react";
import { connect } from "react-redux";
import { loadProduct } from "../actions/productActions";

import ProductDetails from "./ProductDetails";

class ProductDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadProduct(this.props.match.params.productId);
  }

  render() {
    console.log("hallo", this.props.history);

    return (
      <div>
        <ProductDetails product={this.props.product} history={this.props.history} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("productdetailscontainer", state.product.categorie);

  return {
    product: state.product
  };
}

const mapDispatchToProps = { loadProduct };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailsContainer);
