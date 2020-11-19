import React from "react";
import { Link } from "react-router-dom";

export default function ProductBox ({products, clickHandler}){
    return (
       <section className="product-boxes">
        {products.map(product => {
          const thumbnail = product.images.find(image => {
            return image.thumbnail === true;
          });

          return (
            <div className="product-card" key={product.id}>
              <Link to={`/producten/${product.id}`}>
                {product.images.length && (
                  <img src={thumbnail.url} alt="" />
                )}
              </Link>
              <div className="product-card__bottom">
                <Link to={`/producten/${product.id}`}>
                  <h4>{product.name}</h4>
                </Link>
                <p className="prijs">
                  <span>
                    € {product.price}
                  </span> 
                  <i
                    id="addToCart"
                    onClick={() => clickHandler(product.id)}
                    className="fas fa-cart-plus fa-lg"
                    >
                  </i>
                </p>
              </div>
            </div>
          );
        })}
      </section> ) 
  }

