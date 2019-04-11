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

export const SET_ANSWER = "SET_ANSWER";

export function chooseAnswer(dogs) {
  return {
    type: SET_ANSWER,
    payload: dogs
  };
}

export function setAnswer(answer) {
  return function(dispatch) {
    // console.log(answer[Math.floor(Math.random() * answer.length)]);
    const randomDogs = [];
    randomDogs.push(
      answer[Math.floor(Math.random() * answer.length)],
      answer[Math.floor(Math.random() * answer.length)],
      answer[Math.floor(Math.random() * answer.length)]
    );

    dispatch(getDogImages(randomDogs[Math.floor(Math.random() * 3)]));
    dispatch(chooseAnswer(randomDogs));
  };
}

export const GET_ANSWER = "GET_ANSWER";

export function getAnswer() {
  return function(dispatch) {
    request("https://dog.ceo/api/breeds/list/all").then(response => {
      dispatch(setAnswer(Object.keys(response.body.message)));
    });
  };
}

export function getDogImages(breed) {
  console.log("getDogImages test!");
  return function(dispatch) {
    request
      .get(
        `https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random`
      )
      .then(response => {
        console.log(response.body.message);
        dispatch(setDogs(response.body.message));
      });
  };
}
