import {products} from "../data/products";
// const baseUrl = "http://localhost:4000";
const baseUrl = "";

//all products
export const ALL_PRODUCTS = "ALL_PRODUCTS";

const allProducts = (payload) => {
  return {
    type: ALL_PRODUCTS,
    payload,
  };
};

export const getProducts = (p) => (dispatch, getState) => {
  // const state = getState();
  // const { products } = state;
  try {
    if (!p) {
      p = 1;
    }

    const action = allProducts({
      product: products.filter((product) => product.page === parseInt(p)),
      total: products.length,
    });

    dispatch(action);
  } catch (e) {
    console.error(e);
  }
};

export const ONE_PRODUCT = "ONE_PRODUCT";

const productFetched = (product) => {
  return {
    type: ONE_PRODUCT,
    payload: product,
  };
};

export const loadProduct = (productId) => (dispatch) => {
  try {
    const product = products.find(
      (product) => product.id === parseInt(productId)
    );
    dispatch(productFetched(product));
  } catch (e) {
    console.error(e);
  }
};

export const CART_ADDED = "CART_ADDED";

export const cartAdd = (id) => {
  return {
    type: CART_ADDED,
    payload: id,
  };
};

export const CART_SUBTRACTED = "CART_SUBTRACTED";

export const cartSubtract = (id) => {
  return {
    type: CART_SUBTRACTED,
    payload: id,
  };
};

export const CLEAR_CART = "CLEAR_CART";

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

//filter
export const FITLER_SEARCH = "FITLER_SEARCH";

export const filterSearch = (filterCategory) => {
  return {
    type: FITLER_SEARCH,
    payload: filterCategory,
  };
};
