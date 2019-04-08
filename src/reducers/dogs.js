export default (state = [], action = {}) => {
  console.log(action.payload);
  switch (action.type) {
    case "GET_ALBUM":
      return [...state];

    default:
      return state;
  }
};
