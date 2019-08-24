const inititialState = {
    users: [],
    username:""
}

const countUsers = (state = inititialState, action) => {
    switch (action.type) {
      case "GET_USERS_SUCCESS":
        state = {
          ...state,
          users:action.payload
        }
        return state
      case "SET_USERNAME":
        state = {
            ...state,
            username:action.payload
        }
        return state    
      case "CLEAR_USERNAME":
          state = {
              ...state,
              username:""
          }
          return state    
      default:
        break;
    }
    return state;
};

export default countUsers;