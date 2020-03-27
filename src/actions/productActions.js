import request from "superagent";

const baseUrl = "http://localhost:4000";

//all products
export const ALL_PRODUCTS = "ALL_PRODUCTS";

function allProducts(payload) {
  return {
    type: ALL_PRODUCTS,
    payload
  };
}

export const getProducts = () => (dispatch, getState) => {
  const state = getState();
  const { products } = state;

  if (!products.length) {
    request(`${baseUrl}/products`)
      .then(response => {
        const action = allProducts(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

export const CART_ADDED = "CART_ADDED";

export function cartAdd(id) {
  // console.log("cartAdd id: ", id);
  return {
    type: CART_ADDED,
    payload: id
  };
}

export const CART_SUBTRACTED = "CART_SUBTRACTED";

export function cartSubtract(id) {
  return {
    type: CART_SUBTRACTED,
    payload: id
  };
}
