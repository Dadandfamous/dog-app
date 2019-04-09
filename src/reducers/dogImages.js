export default (state = [], action = {}) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_DOGIMAGES":
      return action.payload.map(dogs => {
        return dogs;
      });

    default:
      return state;
  }
};
