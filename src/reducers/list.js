export default (state = [], action = {}) => {
    switch (action.type) {
      case "SET_DOGS":
        return Object.keys(action.payload)
          
      default:
        return state;
    }
  };

 