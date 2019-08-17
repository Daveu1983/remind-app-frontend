const inititialState = {
    items: [], 
  };

const countItems = (state = inititialState, action) => {
    switch (action.type) {
      case "GET_ITEMS_SUCCESS":
        state = {
          ...state,
          items:action.data
        }
        return state
      default:
        break;
    }
    return state;
  };

  export const getNumberOfLiveItems = (state) => {
    if(state.items.length > 0){
      const filteredItems = state.items.filter((element) =>{
        if(!(element.completed)){
          return element;
        }
      })
      return filteredItems.length
    }
  }
  
  export default countItems;