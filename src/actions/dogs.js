import * as request from "superagent";

export const SET_DOGS = "SET_DOGS";

export function setDogs(dogs) {
  return {
    type: SET_DOGS,
    payload: dogs
  };
}

export const SET_RANDOM_DOGS = "SET_RANDOM_DOGS";

export function setRandomDogs(dogData) {
  return {
    type: SET_RANDOM_DOGS,
    payload: dogData
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

export const GET_RANDOM_DOGS = "GET_RANDOM_DOGS";

export function getRandomDogs() {
  return function(dispatch) {
    request("https://dog.ceo/api/breeds/list/all")
      .then(response => {
        // if it doesn't work it's because response.body.message is an object and not an array
        const breeds = Object.keys(response.body.message)
        dispatch(setDogs(breeds));
        
        const randomBreeds = [] // Math.floor(Math.random()...
        while(randomBreeds.length < 3){
        let r = Math.floor(Math.random()*breeds.length);
        if(randomBreeds.indexOf(r) === -1) randomBreeds.push(r);}
        console.log('sdaaf',randomBreeds)
     
        const imageApiUrls = randomBreeds.map(number => {
          const breed = breeds[number]
          return `https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random`
        })
        console.log(imageApiUrls)
        const requests = imageApiUrls.map(url => request(url).then(response => response.body.message))
        
        Promise
          .all(requests)
          .then(imageUrls => {
            const breedData = imageUrls.map((url, index) => {

              const breed = randomBreeds[index]
            
              return {
                breed,
                url
              }
            })
            console.log(breedData)
            // breedData = [{ breed: 'poodle', url: 'https://dog.api.ceo/image/poodle}, ]

            dispatch(setRandomDogs(breedData))
          })
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
