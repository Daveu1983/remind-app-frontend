import axios from 'axios';
import { getItemsAsync } from './count-items';


export const deleteItemAsync = (itemToBeDeleted) =>{
    return dispatch => {
    axios.delete(`https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks/${itemToBeDeleted}`)
        .then(() => {
        dispatch(getItemsAsync())
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}