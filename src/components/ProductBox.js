import React, { Component } from "react";

export default class ProductBox extends Component {
  render() {
    return (
      <section className="boxes">
        {this.props.products.map(product => {
          return (
            <div className="product" key={product.id}>
              <img src={product.img} alt="" />
              <h4>{product.name}</h4>
              <p className="prijs">
                € {product.price}{" "}
                <i
                  id="addToCart"
                  onClick={() => this.props.clickHandler(product.id)}
                  className="fas fa-cart-plus fa-lg"
                ></i>
              </p>
            </div>
          );
        })}
      </section>
    );
  }
}
