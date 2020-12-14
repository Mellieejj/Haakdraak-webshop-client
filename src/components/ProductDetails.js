import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Pacman } from "react-pure-loaders";

const BackArrow = ({ previousImage }) => (
  <i
    className="fa fa-angle-left"
    aria-hidden="true"
    onClick={previousImage}
    style={{ fontSize: "20px", marginRight: "12px" }}
  ></i>
);

const NextArrow = ({ nextImage }) => (
  <i
    className="fa fa-angle-right"
    aria-hidden="true"
    onClick={nextImage}
    style={{ fontSize: "20px", marginLeft: "12px" }}
  ></i>
);

export default function ProductDetails({ product, history, clickHandler }) {
  const [slideCount, setSlideCount] = useState(0);

  const nextImage = () => {
    setSlideCount(slideCount + 1);
  };

  const previousImage = () => {
    setSlideCount(slideCount - 1);
  };

  const images = product.images
    ? product.images.filter((image) => image.thumbnail === false)
    : null;

  return (
    <section>
      <div className="page-title">
        <button className="back-btn" onClick={() => history.goBack()}>
          <i className="far fa-hand-point-left"></i>Terug
        </button>
        <div>
          <h2>{product.name}</h2>
        </div>
      </div>

      <div className="product-details" key={product.id}>
        {product.images ? (
          images
            .filter((image) => image.thumbnail === false)
            .map((image, i) => {
              if (images.indexOf(image) === slideCount) {
                return (
                  <div
                    className="product-details__image"
                    style={{ textAlign: "center" }}
                    key={image.id}
                  >
                    <img src={image.url} alt={product.name} />
                    <div>
                      {slideCount !== 0 ? (
                        <BackArrow previousImage={previousImage} />
                      ) : (
                        ""
                      )}
                      {product.images ? (
                        slideCount !== images.length - 1 ? (
                          <NextArrow nextImage={nextImage} />
                        ) : null
                      ) : null}
                    </div>
                  </div>
                );
              }
              return "";
            })
        ) : (
          <div className="load">
            <Pacman loading="true" color={"#32a093"} />
          </div>
        )}
        <div className="product-details__content">
          <p className="product-details__description">
            <span className="product-details__description-subtitle">
              Beschrijving:
            </span>
            <br /> {product.description}
          </p>

          <p className="product-details__description">
            <span className="product-details__description-subtitle">
              Optionele variaties:
            </span>{" "}
            <br />
            {product.optional}
          </p>

          <p className="product-details__description product-details__prijs">
            € {product.price}{" "}
            <button
              className="form-button product-details__add-button"
              id="addToCart"
              onClick={() => clickHandler(product.id)}
            >
              <i className="fas fa-cart-plus"></i> Toevoegen aan winkelwagentje
            </button>
          </p>

          <p className="product-details__description">
            <span className="product-details__description-subtitle">
              Op voorraad:
            </span>{" "}
            {product.stock <= 0 ? "Niet op voorraad" : product.stock}
          </p>

          {product.stock === 0 ? (
            <p className="product-details__description">
              <span className="product-details__description-subtitle">
                Levertijd:
              </span>{" "}
              <br />
              Kijk op de <Link to="/contact">contactpagina</Link> bij informatie
              verzenden.
            </p>
          ) : null}

          <p className="product-details__description">
            <span className="product-details__description-subtitle">
              Formaat:
            </span>{" "}
            +/- {product.size}
          </p>

          <p className="product-details__description">
            <span className="product-details__description-subtitle">
              {" "}
              Category:
            </span>{" "}
            {product.category ? product.category.name : null}
          </p>
        </div>
      </div>

      <div className="socialmedia">
        <p>Dit product delen op: </p>
        <span className="socialmedia__btn">
          <FacebookShareButton
            children={product.name}
            url={`https://www.haakdraak.nl/producten/${product.id}`}
            quote={product.name}
            hashtag="#haakdraak"
          >
            <FacebookIcon round="true" size="2rem" />
          </FacebookShareButton>
        </span>

        <span className="socialmedia__btn">
          <TwitterShareButton
            children={product.name}
            url={`https://www.haakdraak.nl/producten/${product.id}`}
            hashtags={["haakdraak"]}
            title={product.name}
          >
            <TwitterIcon size="2rem" round="true" />
          </TwitterShareButton>
        </span>
        <span className="socialmedia__btn">
          <WhatsappShareButton
            children={product.name}
            url={`https://www.haakdraak.nl/producten/${product.id}`}
            title={product.name}
          >
            <WhatsappIcon round="true" size="2rem" />
          </WhatsappShareButton>
        </span>
      </div>
    </section>
  );
}
