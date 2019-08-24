import axios from 'axios';
import { getItemsAsync, getOutOfEditMode } from './count-items';

export const saveDescriptionChange = description =>{
    return{
        type:"SAVE_DESCRIPTION_CHANGE",
        payload:description
    }
}

export const saveItemChangeAsync = (Id,newDescription, completed) =>{
    return dispatch =>{
        axios.put('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks',{
          itemID: Id,
          itemDescription:newDescription,
          completed: completed
        })
        .then(() => {
        dispatch(getItemsAsync())
        dispatch(getOutOfEditMode())
        })
        .catch(function (error) {
        console.log(error);
        });
    }
}