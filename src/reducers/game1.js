export default (state = {}, action = {}) => {
  switch (action.type) {
    case "SET_DOGS":
      return {
        ...state,
        url: action.payload
      };
    case "SET_ANSWER":
      return {
        ...state,
        array: action.payload
      };

    default:
      return state;
  }
};