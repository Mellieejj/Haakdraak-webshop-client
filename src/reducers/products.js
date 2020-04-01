import {
  ALL_PRODUCTS,
  CART_ADDED,
  CART_SUBTRACTED,
  CLEAR_CART,
  FITLER_SEARCH
} from "../actions/productActions";

const initialState = { products: [], cart: [], filter:[]};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_PRODUCTS: {
      return { ...state, products: action.payload };
    }

    case FITLER_SEARCH: {
      const filterCategorie = action.payload;

      console.log("filterCat", filterCategorie);
      return {
        ...state,
        filter: state.products.filter(product => {
          console.log("product Cat", product.categorie);
          return product.categorie.name.includes(filterCategorie);
        })
      };
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
    case CART_SUBTRACTED: {
      const productId = action.payload;

      const productCart = state.cart.find(p => p.id === productId);

      if (!productCart) {
        return state;
      } else {
        if (productCart.quantity > 1) {
          const updatedCart = state.cart.map(p =>
            p.id === productId ? { ...p, quantity: p.quantity - 1 } : p
          );
          return {
            ...state,
            cart: updatedCart
          };
        } else {
          const updatedCart = state.cart.filter(p => p.id !== productId);
          return {
            ...state,
            cart: updatedCart
          };
        }
      }
    }

    case CLEAR_CART: {
      return {
        ...state,
        cart: []
      };
    }

    default:
      return state;
  }
}
