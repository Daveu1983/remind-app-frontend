const inititialState = {
    items: [], 
    showCompleted:false,
    itemInEditing: 0,
    inEditing:false
  };

const countItems = (state = inititialState, action) => {
    switch (action.type) {
      case "GET_ITEMS_SUCCESS":
        state = {
          ...state,
          items:action.payload
        }
        return state
      case "TOGGLE_COMPLETED":
        state = {
          ...state,
          showCompleted:!action.payload
        }
        return state
      case "MODIFY_ITEM":
        state = {
          ...state,
          itemInEditing:action.payload,
          inEditing:true
        }
        return state;  
      case "OUT_OF_EDIT":
          state = {
            ...state,
            itemInEditing:0,
            inEditing:false
          }
          return state; 
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