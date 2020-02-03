import axios from "axios";

const getUsersSuccess = fred => {
    return {
      type: "GET_USERS_SUCCESS",
      payload: fred
    };
};
  
const getUsersError = err => {
return {
    type: "GET_USERS_ERROR",
    error: err
    };
};

export const setUserName = username =>{
    return{
        type:"SET_USERNAME",
        payload:username
    }
}

export const clearUsername = () =>{
    return{
    type:"CLEAR_USERNAME"
    }
}

export const getUsersAsync = () => {
    return dispatch => {
        axios.get("https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/users")
        .then(res => {
            dispatch(getUsersSuccess(res.data.tasks));
        })
        .catch(err => {
            dispatch(getUsersError(console.log(err)));
        });
    };
};