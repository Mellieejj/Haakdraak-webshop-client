import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loadProduct, cartAdd } from "../actions/productActions";

import ProductDetails from "./ProductDetails";

export default function ProductDetailsContainer() {
  const product = useSelector(({product}) => product);
  const dispatch = useDispatch();
  const history = useHistory();
  const routeParameter = useParams();

  useEffect(() => {
    dispatch(loadProduct(routeParameter.productId));
  }, [dispatch, routeParameter]);

  const clickHandler = (id) => {
    dispatch(cartAdd(id));
  };

  return (
    <div>
      <ProductDetails
        product={product}
        history={history}
        clickHandler={clickHandler}
      />
    </div>
  );
}
