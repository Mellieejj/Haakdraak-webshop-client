import request from "superagent";
import { displayError } from "./orderActions";

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
