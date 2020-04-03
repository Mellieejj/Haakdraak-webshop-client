import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductBox extends Component {
  render() {
    return (
      <section className="product-boxes">
        {this.props.products.map(product => {
          const thumbnail = product.images.find(image => {
            return image.thumbnail === true;
          });

          return (
            <div className="product" key={product.id}>
              <Link to={`/producten/${product.id}`}>
                {product.images.length ? (
                  <img src={thumbnail.url} alt="" />
                ) : null}
                <h4>{product.name}</h4>
              </Link>
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
