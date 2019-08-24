const inititialState = {
    description: "", 
  };

const saveDescription = (state = inititialState, action) => {
    switch (action.type) {
      case "SAVE_DESCRIPTION":
        state = {
          ...state,
          description:action.payload
        }
        return state
      case "CLEAR_DESCRIPTION":
          state = {
            ...state,
            description:""
          }
          return state
      default:
        break;
    }
    return state;
  };

  export default saveDescription;