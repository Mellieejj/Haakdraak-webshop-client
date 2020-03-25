import { ALL_PRODUCTS } from "../actions/productActions";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_PRODUCTS: {
      return action.payload;
    }
    default:
      return state;
  }
}
