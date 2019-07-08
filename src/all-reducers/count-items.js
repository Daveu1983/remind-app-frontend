const countItems = (state = 56, action) => {
    switch(action.type){
        case "GET_ITEMS":
            return state;
        default:
            return state;   
    }
        
}

export default countItems