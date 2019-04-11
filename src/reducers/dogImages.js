export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_DOGIMAGES":
      return action.payload.map(dogs => {
        return dogs;
      });
    case "SET_RANDOM_DOG_IMAGE":
      return action.payload;

    default:
      return state;
  }
};
