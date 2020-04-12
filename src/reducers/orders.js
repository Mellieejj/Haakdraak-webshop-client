import { ALL_ORDERS } from "../actions/orderActions";

const initialState = [];

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ALL_ORDERS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
