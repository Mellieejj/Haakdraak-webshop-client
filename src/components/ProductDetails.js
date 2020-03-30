import React, { Component } from "react";

const BackArrow = props => (
  <div
    onClick={props.previousImage}
    style={{ fontSize: "2em", marginRight: "12px" }}
  >
    <i className="fa fa-angle-left" aria-hidden="true"></i>
  </div>
);

const NextArrow = props => (
  <div
    onClick={props.nextImage}
    style={{ fontSize: "2em", marginLeft: "12px" }}
  >
    <i className="fa fa-angle-right" aria-hidden="true"></i>
  </div>
);

export default class ProductDetails extends Component {
  state = {
    slideCount: 0
  };

  nextImage = () => {
    this.setState({
      slideCount: this.state.slideCount + 1
    });
  };

  previousImage = () => {
    this.setState({
      slideCount: this.state.slideCount - 1
    });
  };

  render() {
    return (
      <section className="top-product">
        <div
          style={{ float: "left", marginTop: "auto" }}
          className="formButton"
          onClick={() => this.props.history.goBack()}
        >
          <i className="far fa-hand-point-left"></i>Terug
        </div>
        <div className="productnaam">
          <h2>{this.props.product.name}</h2>
        </div>

        <div className="box" key={this.props.product.id}>
          {this.props.product.images
            ? this.props.product.images.map((image, i) => {
                if (
                  this.props.product.images.indexOf(image) ===
                  this.state.slideCount
                ) {
                  return (
                    <div key={image.id}>
                      <img src={image.url} alt="" />
                    </div>
                  );
                }
                return "";
              })
            : null}
          {this.state.slideCount !== 0 ? (
            <BackArrow previousImage={this.previousImage} />
          ) : (
            ""
          )}
          {this.props.product.images ? (
            this.state.slideCount !== this.props.product.images.length - 1 ? (
              <NextArrow nextImage={this.nextImage} />
            ) : null
          ) : null}

          <p>
            € {this.props.product.price}{" "}
            <i
              id="addToCart"
              onClick={() => this.props.clickHandler(this.props.product.id)}
              className="fas fa-cart-plus fa-lg"
            ></i>
          </p>
          <p>Op voorraad: {this.props.product.stock}</p>
          {this.props.product.stock === 0 ? (
            <p>
              Levertijd: <br />
              Producten die hier op de site staan, maak ik graag op bestelling.
              De levertijd is ongeveer 2 weken. De producten die je hier op de
              site vindt, zijn voorbeelden die ik al een keer gemaakt heb. Dit
              kan allemaal aangepast worden aan je eigen voorkeuren en ideeën.{" "}
            </p>
          ) : null}
          <p>Formaat: +/- {this.props.product.size}</p>
          <p>
            Beschrijving:
            <br /> {this.props.product.description}
          </p>
          <p>
            Optionele variaties: <br />
            {this.props.product.optioneel}
          </p>
          <p>
            Categorie:{" "}
            {this.props.product.categorie
              ? this.props.product.categorie.name
              : null}
          </p>
        </div>
      </section>
    );
  }
}
