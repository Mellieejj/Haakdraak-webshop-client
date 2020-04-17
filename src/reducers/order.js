import { ONE_ORDER } from "../actions/orderActions";

const initialState = [];

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ONE_ORDER: {
      return action.payload;
    }
    default:
      return state;
  }
}