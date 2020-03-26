import { ALL_PRODUCTS, CART_ADDED } from "../actions/productActions";

const initialState = {products: [], cart: []};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_PRODUCTS: {
      return {...state, products: action.payload }
    }

    case CART_ADDED: {
      const productId = action.payload;
      const productCart = state.cart.find(p => p.id === productId);

      if (!productCart) {
        const product = state.products.find(p => p.id === productId);
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }]
        };
      } else {
        const updatedCart = state.cart.map(p =>
          p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
        );
        return {
          ...state,
          cart: updatedCart
        };
      }
    }

    default:
      return state;
  }
}
