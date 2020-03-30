import { ONE_PRODUCT } from "../actions/productActions";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ONE_PRODUCT: {
      return action.payload;
    }
    default:
      return state;
  }
}
