export default (state = { randomDogs: [], breeds: [] }, action = {}) => {
  switch (action.type) {
    case "SET_DOGS":
      return {
        ...state,
        breeds: action.payload
      }
    case "SET_RANDOM_DOGS":
      return {
        ...state,
        randomDogs: action.payload
      }

      case "DISPLAY_MESSAGE":
      return {
        ...state,
        randomDogs: action.payload
      }

    default:
      return state;
  }
};
