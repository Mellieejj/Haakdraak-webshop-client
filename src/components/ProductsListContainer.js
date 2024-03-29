import React, {useEffect, useState} from "react";
import {Pacman} from "react-pure-loaders";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {cartAdd, getProducts} from "../actions/productActions";

import ProductBox from "./ProductBox";
// import SelectFilter from "./SelectFilter";
import "../style/components/pagination.scss";
import Pagination from "./Pagination";

export default function ProductListContainer() {
  // const [categoryFilter, setCategoryFilter] = useState("all");
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(
    location.search.substr(location.search.length - 1) | 1
  );
  const {products, totalProducts, filter} = useSelector(
    ({products}) => products
  );
  // console.log(filter, "filter");

  useEffect(() => {
    setCurrentPage(location.search.substr(location.search.length - 1));
    dispatch(getProducts(location.search.substr(location.search.length - 1)));
  }, [location.search, dispatch, currentPage]);

  const clickHandler = (id) => {
    dispatch(cartAdd(id));
  };

  //todo:pagination with filter
  //old variables maybe still needed when filter is back
  // const productsList = categoryFilter === "all" ? products : filter;
  // const currentProducts =
  // productsList && productsList.slice(firstIndex, lastIndex);

  return (
    <section>
      <div className="page-title">
        <h2>Producten</h2>
      </div>

      {/* <div className="page-title">
        <SelectFilter
          setCategoryFilter={setCategoryFilter}
          dispatch={dispatch}
          setCurrentPage={setCurrentPage}
        />
      </div> */}

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />

      <div>
        {products.length === 0 ? (
          <div className="load">
            <Pacman loading="true" color={"#32a093"} />
          </div>
        ) : (
          <ProductBox products={products} clickHandler={clickHandler} />
        )}
      </div>

      <div style={{paddingTop: "25px"}}>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </div>
    </section>
  );
}
