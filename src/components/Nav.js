import React, {Component} from 'react';

class Nav extends Component{
    render(){
        return(
            <nav>
                <h2>{this.props.text}</h2>
            </nav>
        );
    }
}

export default Nav;