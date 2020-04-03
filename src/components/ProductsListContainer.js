import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, cartAdd, filterSearch } from "../actions/productActions";

import ProductBox from "./ProductBox";

class ProductListContainer extends Component {
  state = {
    categorieFilter: "all",
    currentPage: 1,
    productsPerPage: 16
  };

  componentDidMount() {
    this.props.getProducts();
  }

  clickHandler = id => {
    this.props.cartAdd(id);
  };

  handleFilter = event => {
    if (event.target.value === "all") {
      this.props.getProducts();
      this.setState({
        ...this.state,
        categorieFilter: "all",
        currentPage: 1
      });
    } else {
      this.props.filterSearch(event.target.value);
      this.setState({
        ...this.state,
        categorieFilter: event.target.value,
        currentPage: 1
      });
    }
  };

  firstPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        ...this.state,
        currentPage: 1
      });
    }
  };

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        ...this.state,
        currentPage: this.state.currentPage - 1
      });
    }
  };

  lastPage = () => {
    const productsList =
      this.state.categorieFilter === "all"
        ? this.props.products
        : this.props.filter;

    if (
      this.state.currentPage <
      Math.ceil(productsList.length / this.state.productsPerPage)
    ) {
      this.setState({
        ...this.state,
        currentPage: Math.ceil(productsList.length / this.state.productsPerPage)
      });
    }
  };

  nextPage = () => {
    const productsList =
      this.state.categorieFilter === "all"
        ? this.props.products
        : this.props.filter;

    if (
      this.state.currentPage <
      Math.ceil(productsList.length / this.state.productsPerPage)
    ) {
      this.setState({
        ...this.state,
        currentPage: this.state.currentPage + 1
      });
    }
  };

  render() {
    //pagination
    const { products } = this.props;
    const productsList =
      this.state.categorieFilter === "all"
        ? this.props.products
        : this.props.filter;

    const { currentPage, productsPerPage } = this.state;

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const currentProducts = productsList
      ? productsList.slice(firstIndex, lastIndex)
      : null;

    const totalPages = products
      ? Math.ceil(productsList.length / productsPerPage)
      : null;
    return (
      <section className="top-product">
        <div className="pagina-naam">
          <h2>Producten</h2>
        </div>
        <span className="filter">
          <label>Filter producten:</label>

          <select id="categorie" onChange={this.handleFilter}>
            <option value="all">Alle Producten</option>
            <option value={"Bijtringen & Rammelaars"}>
              {"Bijtringen & Rammelaars"}
            </option>
            <option value="Baby Overige">Baby Overige</option>
            <option value="Knuffels">Knuffels</option>
            <option value="Sleutelhangers">Sleutelhangers</option>
            <option value="Overige">Overige</option>
          </select>
        </span>
        <div>
          <ProductBox
            products={currentProducts}
            clickHandler={this.clickHandler}
          />
        </div>
        <div className="pagination">
          Pagina {currentPage} van {totalPages}
        </div>
        <div className="pagination">
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={this.firstPage}
          >
            <i className="fas fa-angle-double-left"></i>
          </button>
          <button
            disabled={currentPage === 1 ? true : false}
            onClick={this.prevPage}
          >
            <i className="fas fa-angle-left"></i>
          </button>
          <button
            disabled={currentPage === totalPages ? true : false}
            onClick={this.nextPage}
          >
            <i className="fas fa-angle-right"></i>
          </button>
          <button
            disabled={currentPage === totalPages ? true : false}
            onClick={this.lastPage}
          >
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.products.products);
  return {
    products: state.products.products,
    filter: state.products.filter
  };
}

const mapDispatchToProps = { getProducts, cartAdd, filterSearch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
