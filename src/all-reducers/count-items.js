const inititialState = {
    items: [{name:"john", age:12}]
  };

const countItems = (state = inititialState, action) => {
    switch (action.type) {
      case "GET_ITEMS":
        return state.items;
      case "GET_ITEMS_SUCCESS":
        console.log(action.data)  
        state.items = action.data;
        return state.items
      default:
        console.log(state.items)  
        return state.items;
    }
  };
  
  export default countItems;