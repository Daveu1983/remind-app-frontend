const inititialState = {
    description: "", 
  };

const addItem = (state = inititialState, action) => {
    switch (action.type) {
      case "SAVE_DESCRIPTION":
        state = {
          ...state,
          description:action.payload
        }
        return state
      default:
        break;
    }
    return state;
  };

  export default addItem;