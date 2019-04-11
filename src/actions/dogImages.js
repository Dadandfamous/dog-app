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

export const GET_DOGGAMEIMAGE = "GET_DOGGAMEIMAGE";

export function getDogGameImage(breed) {
  return function(dispatch) {
    request
      .get(

        `https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random`


      )
      .then(response => {
        console.log(response.body.message);
        dispatch(setRandomDogImage(response.body.message));
      });
  };
}


export const SET_RANDOM_DOG_IMAGE = "SET_RANDOM_DOG_IMAGE";

export function setRandomDogImage(dogs) {
  return {
    type: SET_RANDOM_DOG_IMAGE,
    payload: dogs
  };
}

export function getDogName () {
  return function (dispatch) {
    request
    .get(
      `https://dog.ceo/api/breed`
    )
    .then(response => {
      console.log(response);
      dispatch(setDogImages(response.body.message))
    })
  }
}

export const GET_DOGNAME =  "GET_DOGNAME"

