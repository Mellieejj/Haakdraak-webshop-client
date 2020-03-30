import { combineReducers } from "redux";
import products from "./products";
import product from "./product";
import errors from "./errors";

export default combineReducers({
  products,
  product,
  errors
});
