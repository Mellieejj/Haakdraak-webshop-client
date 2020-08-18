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

const BackArrow = ({previousImage}) => (
  <i
    className="fa fa-angle-left"
    aria-hidden="true"
    onClick={previousImage}
    style={{ fontSize: "20px", marginRight: "12px" }}
  ></i>
);

const NextArrow = (nextImage) => (
  <i
    className="fa fa-angle-right"
    aria-hidden="true"
    onClick={nextImage}
    style={{ fontSize: "20px", marginLeft: "12px" }}
  ></i>
);

export default function ProductDetails({product, history, clickHandler}) {
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
    <section className="top-product">
      <div
        style={{ float: "left", marginTop: "auto" }}
        className="formButton"
        onClick={() => history.goBack()}
      >
        <i className="far fa-hand-point-left"></i>Terug
      </div>
      <div className="pagina-naam">
        <h2>{product.name}</h2>
      </div>

      <div className="box" key={product.id}>
        {product.images ? (
          images
            .filter((image) => image.thumbnail === false)
            .map((image, i) => {
              if (images.indexOf(image) === slideCount) {
                return (
                  <div style={{ textAlign: "center" }} key={image.id}>
                    <img src={image.url} alt="" />
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

        <p>
          <span className="kopjes">Beschrijving:</span>
          <br /> {product.description}
        </p>

        <p>
          <span className="kopjes"> Optionele variaties:</span> <br />
          {product.optional}
        </p>

        <p>
          € {product.price}{" "}
          <i
            id="addToCart"
            style={{ float: "center", marginLeft: "150px" }}
            onClick={() => clickHandler(product.id)}
            className="fas fa-cart-plus"
          >
            {" "}
            <span style={{ fontFamily: "Patrick Hand", fontSize: "20px" }}>
              Toevoegen aan winkelwagentje
            </span>
          </i>
        </p>

        <p>
          <span className="kopjes">Op voorraad:</span> {product.stock}
        </p>

        {product.stock === 0 ? (
          <p>
            <span className="kopjes">Levertijd:</span> <br />
            Kijk op de <Link to="/contact">contactpagina</Link> bij informatie
            verzenden.
          </p>
        ) : null}

        <p>
          <span className="kopjes">Formaat:</span> +/- {product.size}
        </p>

        <p>
          <span className="kopjes"> Category:</span>{" "}
          {product.category ? product.category.name : null}
        </p>
      </div>
      <div className="socialmedia">
        <p>Dit product delen op: </p>

        <FacebookShareButton
          children={product.name}
          url={`https://www.haakdraak.nl/producten/${product.id}`}
          quote={product.name}
          hashtag="#haakdraak"
        >
          <FacebookIcon round="true" size="2rem" />
        </FacebookShareButton>

        <TwitterShareButton
          children={product.name}
          url={`https://www.haakdraak.nl/producten/${product.id}`}
          hashtags={["haakdraak"]}
          title={product.name}
        >
          <TwitterIcon size="2rem" round="true" />
        </TwitterShareButton>

        <WhatsappShareButton
          children={product.name}
          url={`https://www.haakdraak.nl/producten/${product.id}`}
          title={product.name}
        >
          <WhatsappIcon round="true" size="2rem" />
        </WhatsappShareButton>
      </div>
    </section>
  );
}
