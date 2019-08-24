const inititialState = {
    newDescription: "", 
  };

const saveDescription = (state = inititialState, action) => {
    switch (action.type) {
      case "SAVE_DESCRIPTION_CHANGE":
        state = {
          ...state,
          newDescription:action.payload
        }
        return state
      default:
        break;
    }
    return state;
  };

  export default saveDescription;