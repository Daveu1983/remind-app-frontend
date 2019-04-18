import React, {Component} from 'react';

class ListItem extends Component{
    render(){
        return(
            <li>{this.props.text}
                    <button>Done</button>
                <button>Delete</button>
            </li>
        );
    }
}

export default ListItem;