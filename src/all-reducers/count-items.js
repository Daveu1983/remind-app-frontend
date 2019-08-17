const inititialState = {
    items: [], 
    numberOfItems:0
  };

const countItems = (state = inititialState, action) => {
    switch (action.type) {
      case "GET_ITEMS_SUCCESS":
        state = {
          ...state,
          items:action.data,
          numberOfItems:action.data.length
        }
        return state
      default:
        break;
    }
    return state;
  };
  
  export default countItems;