import React, {Component} from 'react';

class AddItem extends Component{
    render(){
        return(
            <div>
                <form>
                    <label>What do you want to be reminded of </label>
                    <input type="text" />
                    <button type="button">Add</button>
                </form>
            </div>
        );
    }
}

export default AddItem;