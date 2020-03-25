import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../actions/productActions";

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div>
        <section className="top-product">
          <div className="productnaam">
            <h2>Producten</h2>
            {this.props.products.map(product => {
              return <p>{product.name}</p>;
            })}
          </div>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.products);
  return {
    products: state.products
  };
}

const mapDispatchToProps = { getProducts };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
