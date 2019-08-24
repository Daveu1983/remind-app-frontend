import axios from 'axios';
import { getItemsAsync } from './count-items';


export const completeItemAsync = (itemToBeCompleted, description) =>{
    return dispatch => {
        axios.put('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks',{
          itemID: itemToBeCompleted,
          itemDescription:description,
          completed: true
    
        })
        .then(() => {
        dispatch(getItemsAsync())
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}