import * as request from "superagent";

export const SET_DOGS = "SET_DOGS";

export function setDogs(dogs) {
  return {
    type: SET_DOGS,
    payload: dogs
  };
}
export const GET_DOGS = "GET_DOGS";

export function getDogs() {
  return function(dispatch) {
    request("https://dog.ceo/api/breeds/list/all").then(response => {
      dispatch(setDogs(response.body.message));
    });
  };
}
