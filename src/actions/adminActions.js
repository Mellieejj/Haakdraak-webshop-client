import request from "superagent";
import { displayError, removeError } from "./orderActions";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://cherry-crumble-89582.herokuapp.com"

export const JWT = "JWT";

const loginUser = payload => {
  return {
    type: JWT,
    payload
  };
};

export function login(data) {
  return async function(dispatch) {
    try {
      const response = await request.post(`${baseUrl}/login`).send(data);
      const action = loginUser(response.body);
      await dispatch(action);
    } catch (error) {
      if (error.response) {
        const errorMessage = displayError(error.response.body.message);
        return dispatch(errorMessage);
      }
      console.log(error);
    }
  };
}

export const NEW_PRODUCT = "NEW_PRODUCT";

function newProduct(payload) {
  return {
    type: NEW_PRODUCT,
    payload,
  };
}

export function createProduct(data) {
  return async function (dispatch, getState) {
    try {
      console.log("data", data);
      
      const response = await request.post(`${baseUrl}/products`).send(data);
      console.log("response", response.body);
      
      const action = newProduct(response.body);
      console.log("action", action )
      await dispatch(action);
      dispatch(removeError());
      dispatch(
        displayError(
          "Product is toegevoegd!"
        )
      );
    } catch (error) {
      if (error.response) {
        const errorMessage = displayError(error.response.body.message);

        dispatch(errorMessage);
      } else {
        console.error(error);
      }
    }
  };
}