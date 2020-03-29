import React, { Component } from "react";

export default class ProductDetails extends Component {
  render() {
    console.log("hello", this.props.history);

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
          <img src={this.props.product.img} alt="" />
          <p>€ {this.props.product.price}</p>
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
