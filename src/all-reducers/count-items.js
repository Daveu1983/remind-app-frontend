const inititialState = {
    items: []
  };

const countItems = (state = inititialState, action) => {
    switch (action.type) {
      case "GET_ITEMS_SUCCESS":
        state.items = action.data;
        return state.items
      default:
        return state.items;
    }
  };
  
  export default countItems;