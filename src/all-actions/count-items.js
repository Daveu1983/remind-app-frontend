import axios from "axios";

const getItemsSuccess = fred => {
    return {
      type: "GET_ITEMS_SUCCESS",
      payload: fred
    };
  };
  
  const getItemsError = err => {
    return {
      type: "GET_ITEMS_ERROR",
      error: err
    };
  };

  export const toggleCompletedFunction = showComplete =>{
    return {
      type:"TOGGLE_COMPLETED",
      payload:showComplete
    }
  }
  
  export const getItemsAsync = () => {
    return dispatch => {
      axios.get("https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks")
        .then(res => {
          dispatch(getItemsSuccess(res.data.tasks));
        })
        .catch(err => {
          dispatch(getItemsError(console.log(err)));
        });
    };
  };