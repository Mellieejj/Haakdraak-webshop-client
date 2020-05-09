import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, cartAdd, filterSearch } from "../actions/productActions";
import { Pacman } from "react-pure-loaders";

import ProductBox from "./ProductBox";

export default function ProductListContainer() {
  const [categorieFilter, setCategorieFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);

  const { products, filter } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const clickHandler = (id) => {
    dispatch(cartAdd(id));
  };

  const handleFilter = (event) => {
    if (event.target.value === "all") {
      dispatch(getProducts());
      setCategorieFilter("all");
      setCurrentPage(1);
    } else {
      filterSearch(event.target.value);
      setCategorieFilter(event.target.value);
      setCurrentPage(1);
    }
  };
  const firstPage = () => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const lastPage = () => {
    const productsList = categorieFilter === "all" ? products : filter;

    if (currentPage < Math.ceil(productsList.length / productsPerPage)) {
      setCurrentPage(Math.ceil(productsList.length / productsPerPage));
    }
  };

  const nextPage = () => {
    const productsList = categorieFilter === "all" ? products : filter;

    if (currentPage < Math.ceil(productsList.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //pagination
  const productsList = categorieFilter === "all" ? products : filter;

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

        <select id="categorie" onChange={handleFilter}>
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
        {!currentProducts ? (
          <div className="load">
            <Pacman loading="true" color={"#32a093"} />
          </div>
        ) : (
          <ProductBox products={currentProducts} clickHandler={clickHandler} />
        )}
      </div>

      <div className="pagination">
        Pagina {currentPage} van {totalPages}
      </div>
      <div className="pagination">
        <button disabled={currentPage === 1 ? true : false} onClick={firstPage}>
          <i className="fas fa-angle-double-left"></i>
        </button>
        <button disabled={currentPage === 1 ? true : false} onClick={prevPage}>
          <i className="fas fa-angle-left"></i>
        </button>
        <button
          disabled={currentPage === totalPages ? true : false}
          onClick={nextPage}
        >
          <i className="fas fa-angle-right"></i>
        </button>
        <button
          disabled={currentPage === totalPages ? true : false}
          onClick={lastPage}
        >
          <i className="fas fa-angle-double-right"></i>
        </button>
      </div>
    </section>
  );
}
