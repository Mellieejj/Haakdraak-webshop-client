import {
  ALL_PRODUCTS,
  CART_ADDED,
  CART_SUBTRACTED,
  CLEAR_CART,
  FITLER_SEARCH,
} from "../actions/productActions";

const initialState = { products: [], cart: [], filter: [], totalProducts: 0 };

export default function (state = initialState, action = {}) {
  const { products, cart } = state
  switch (action.type) {
    case ALL_PRODUCTS: {
      return { ...state, products: action.payload.product, totalProducts: action.payload.total };
    }

    case FITLER_SEARCH: {
      const filterCategory = action.payload;

      return {
        ...state,
        filter: products.filter((product) => {
          return product.category.name === filterCategory;
        }),
      };
    }

    case CART_ADDED: {
      const productId = action.payload;
      const productCart = cart.find((p) => p.id === productId);

      if (!productCart) {
        const product = products.find((p) => p.id === productId);
        return {
          ...state,
          cart: [...cart, { ...product, quantity: 1 }],
        };
      } else {
        const updatedCart = cart.map((p) =>
          p.id === productId ? { ...p, quantity: p.quantity + 1 } : p
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }
    }
    case CART_SUBTRACTED: {
      const productId = action.payload;

      const productCart = cart.find((p) => p.id === productId);

      if (!productCart) {
        return state;
      } else {
        if (productCart.quantity > 1) {
          const updatedCart = cart.map((p) =>
            p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
          );
          return {
            ...state,
            cart: updatedCart,
          };
        } else {
          const updatedCart = cart.filter((p) => p.id !== productId);
          return {
            ...state,
            cart: updatedCart,
          };
        }
      }
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
}
