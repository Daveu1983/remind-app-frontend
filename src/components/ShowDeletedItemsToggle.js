import React, { Component } from "react";

class ShowDeletedItemsToggle extends Component {
    state = {
        showDeletedButtonClicked: true
    }

    showDeletedClicked = () => {
        this.props.showDeletedFunction();
      } 
    render() {
        return (
            <div className="container">
                <div className="col-md-2 col-12 text-center generalText">
                <button className="btn btn-secondary" onClick={this.showDeletedClicked}
                    type="button">{this.props.showDeletedText} </button></div>
            </div>
        );
    }
}

export default ShowDeletedItemsToggle;