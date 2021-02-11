import request from "superagent";

const baseUrl = "http://localhost:4000";
// const baseUrl = "https://cherry-crumble-89582.herokuapp.com";

//all products
export const ALL_PRODUCTS = "ALL_PRODUCTS";

const allProducts = (payload) => {
  return {
    type: ALL_PRODUCTS,
    payload,
  };
};

export const getProducts = (page) => (dispatch, getState) => {
  // const state = getState();
  // const { products } = state;
  if (!page) {
    page = 1;
  }
  request(`${baseUrl}/products?page=${page}`)
    .then((response) => {
      const action = allProducts(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const ONE_PRODUCT = "ONE_PRODUCT";

const productFetched = (product) => {
  return {
    type: ONE_PRODUCT,
    payload: product,
  };
};

export const loadProduct = (productId) => (dispatch) => {
  request
    .get(`${baseUrl}/products/${productId}`)
    .send(productId)
    .then((response) => {
      dispatch(productFetched(response.body));
    })
    .catch(console.error);
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
