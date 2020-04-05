import React, { Component } from "react";
import { Link } from "react-router-dom";

const BackArrow = (props) => (
  <i
    className="fa fa-angle-left"
    aria-hidden="true"
    onClick={props.previousImage}
    style={{ fontSize: "20px", marginRight: "12px" }}
  ></i>
);

const NextArrow = (props) => (
  <i
    className="fa fa-angle-right"
    aria-hidden="true"
    onClick={props.nextImage}
    style={{ fontSize: "20px", marginLeft: "12px" }}
  ></i>
);

export default class ProductDetails extends Component {
  state = {
    slideCount: 0,
  };

  nextImage = () => {
    this.setState({
      slideCount: this.state.slideCount + 1,
    });
  };

  previousImage = () => {
    this.setState({
      slideCount: this.state.slideCount - 1,
    });
  };

  render() {
    const images = this.props.product.images
      ? this.props.product.images.filter((image) => image.thumbnail === false)
      : null;

    return (
      <section className="top-product">
        <div
          style={{ float: "left", marginTop: "auto" }}
          className="formButton"
          onClick={() => this.props.history.goBack()}
        >
          <i className="far fa-hand-point-left"></i>Terug
        </div>
        <div className="pagina-naam">
          <h2>{this.props.product.name}</h2>
        </div>

        <div className="box" key={this.props.product.id}>
          {this.props.product.images
            ? images
                .filter((image) => image.thumbnail === false)
                .map((image, i) => {
                  if (images.indexOf(image) === this.state.slideCount) {
                    return (
                      <div style={{ textAlign: "center" }} key={image.id}>
                        <img src={image.url} alt="" />
                        <div>
                          {this.state.slideCount !== 0 ? (
                            <BackArrow previousImage={this.previousImage} />
                          ) : (
                            ""
                          )}
                          {this.props.product.images ? (
                            this.state.slideCount !== images.length - 1 ? (
                              <NextArrow nextImage={this.nextImage} />
                            ) : null
                          ) : null}
                        </div>
                      </div>
                    );
                  }
                  return "";
                })
            : null}

          <p>
            <span className="kopjes">Beschrijving:</span>
            <br /> {this.props.product.description}
          </p>

          <p>
            <span className="kopjes"> Optionele variaties:</span> <br />
            {this.props.product.optioneel}
          </p>

          <p>
            € {this.props.product.price}{" "}
            <i
              id="addToCart"
              style={{ float: "center", marginLeft: "150px" }}
              onClick={() => this.props.clickHandler(this.props.product.id)}
              className="fas fa-cart-plus"
            >
              {" "}
              <span style={{ fontFamily: "Patrick Hand", fontSize: "20px" }}>
                Toevoegen aan winkelwagentje
              </span>
            </i>
          </p>

          <p>
            <span className="kopjes">Op voorraad:</span>{" "}
            {this.props.product.stock}
          </p>

          {this.props.product.stock === 0 ? (
            <p>
              <span className="kopjes">Levertijd:</span> <br />
              Kijk op de <Link to="/contact">contactpagina</Link> bij informatie
              verzenden.
            </p>
          ) : null}

          <p>
            <span className="kopjes">Formaat:</span> +/-{" "}
            {this.props.product.size}
          </p>

          <p>
            <span className="kopjes"> Categorie:</span>{" "}
            {this.props.product.categorie
              ? this.props.product.categorie.name
              : null}
          </p>
        </div>
      </section>
    );
  }
}
