import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, cartAdd, filterSearch } from "../actions/productActions";
import { Pacman } from "react-pure-loaders";

import ProductBox from "./ProductBox";
import SelectFilter from "./SelectFilter";

export default function ProductListContainer() {
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(16);

  const { products, filter } = useSelector(({products}) => products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const clickHandler = (id) => {
    dispatch(cartAdd(id));
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
    const productsList = categoryFilter === "all" ? products : filter;

    if (currentPage < Math.ceil(productsList.length / productsPerPage)) {
      setCurrentPage(Math.ceil(productsList.length / productsPerPage));
    }
  };

  const nextPage = () => {
    const productsList = categoryFilter === "all" ? products : filter;

    if (currentPage < Math.ceil(productsList.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //pagination
  const productsList = categoryFilter === "all" ? products : filter;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = productsList && productsList.slice(firstIndex, lastIndex);

  const totalPages = products && Math.ceil(productsList.length / productsPerPage);

  return (
    <section>
      <div className="page-title">
        <h2>Producten</h2>
      </div>
    
      <SelectFilter setCategoryFilter={setCategoryFilter} dispatch={dispatch} setCurrentPage={setCurrentPage} />

      <div>
        {currentProducts.length === 0 ? (
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
