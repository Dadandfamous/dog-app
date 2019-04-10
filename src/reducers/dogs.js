export default (state = [], action = {}) => {
  switch (action.type) {
    case "SET_DOGS":
      return Object.keys(action.payload).map(dogs => {
        return dogs;
      });

    default:
      return state;
  }
};
