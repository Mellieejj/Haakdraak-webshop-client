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
            <div className="product" key={product.id}>
              <Link to={`/producten/${product.id}`}>
                {product.images.length && (
                  <img src={thumbnail.url} alt="" />
                )}
                <h4>{product.name}</h4>
              </Link>
              <p className="prijs">
                € {product.price}{" "}
                <i
                  id="addToCart"
                  onClick={() => clickHandler(product.id)}
                  className="fas fa-cart-plus fa-lg"
                ></i>
              </p>
            </div>
          );
        })}
      </section> ) 
  }

