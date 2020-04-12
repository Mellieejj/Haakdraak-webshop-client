import { combineReducers } from "redux";
import products from "./products";
import product from "./product";
import errors from "./errors";
import user from "./adminUser";
import orders from "./orders";

export default combineReducers({
  products,
  product,
  errors,
  user,
  orders,
});
