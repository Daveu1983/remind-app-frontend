const countItems = (state = 56, action) => {
    switch(action.type){
        case "GET_ITEMS":
            return state + 20;
        default:
            return state;   
    }
        
}

export default countItems