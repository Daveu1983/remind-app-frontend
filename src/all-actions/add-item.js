import axios from 'axios';
import { getItemsAsync } from './count-items';

export const saveDescription = description =>{
    return{
        type:"SAVE_DESCRIPTION",
        payload:description
    }
}

export const clearDescription = () =>{
    return{
        type:"CLEAR_DESCRIPTION"
    }
}

export const addItemAsync = (description, username) =>{
    return dispatch => {
        axios.post('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks',{
            itemDescription:description,
            completed:false,
            userId:parseInt(username)
          })
          .then(() => {
          dispatch(getItemsAsync())
          })
          .catch(function (error) {
            console.log(error);
          });
      
    }
}
