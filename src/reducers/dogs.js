export default (state = [], action = {}) => {
  console.log(action.payload);
  switch (action.type) {
    case "SET_DOGS":
      return Object.keys(action.payload).map(dogs => {
        return dogs;
      });

    default:
      return state;
  }
};
