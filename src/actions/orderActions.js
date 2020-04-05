import request from "superagent";

const baseUrl = "http://localhost:4000";
// const baseUrl = "https://cherry-crumble-89582.herokuapp.com";

//add error
export const ERROR_MESSAGE = "ERROR_MESSAGE";

export const displayError = (payload) => {
  return {
    type: ERROR_MESSAGE,
    payload,
  };
};

//remove error message
export const REMOVE_ERROR = "REMOVE_ERROR";

export const removeError = () => {
  return {
    type: REMOVE_ERROR,
  };
};

export const NEW_ORDER = "NEW_ORDER";

function newOrder(payload) {
  return {
    type: NEW_ORDER,
    payload,
  };
}

export function createOrder(data) {
  return async function (dispatch, getState) {
    try {
      const response = await request.post(`${baseUrl}/orders`).send(data);
      const action = newOrder(response.body);
      await dispatch(action);
      dispatch(removeError());
      dispatch(
        displayError(
          "Uw bestelling is geplaatst, ik neem zo snel mogelijk contact op!"
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
