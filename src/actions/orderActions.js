import request from "superagent"

const baseUrl = "http://localhost:4000"

export const NEW_ORDER = "NEW_ORDER";

function newOrder(payload) {
  return {
    type: NEW_ORDER,
    payload
  };
}

export const createOrder = data => (dispatch, getState) => {
  request
    .post(`${baseUrl}/orders`)
    .send(data)
    .then(response => {
      const action = newOrder(response.body);
      dispatch(action);
    })
    .catch(console.error);
};