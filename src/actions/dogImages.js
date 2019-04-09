import * as request from "superagent";

export const SET_DOGIMAGES = "SET_DOGIMAGES";

export function setDogImages(dogs) {
  return {
    type: SET_DOGIMAGES,
    payload: dogs
  };
}
export const GET_DOGIMAGES = "GET_DOGIMAGES";

export function getDogImages(breed) {
  return function(dispatch) {
    request
      .get(
        `https://dog.ceo/api/breed/${encodeURIComponent(
          breed
        )}/images/random/10`
      )
      .then(response => {
        dispatch(setDogImages(response.body.message));
      });
  };
}
