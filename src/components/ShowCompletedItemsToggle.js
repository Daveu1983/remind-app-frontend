import React, { Component } from "react";

class ShowCompletedItemsToggle extends Component {

    showCompletedClicked = () => {
        this.props.showCompletedFunction();
      } 
    render() {
        return (
            <button className="btn btn-secondary" onClick={this.showCompletedClicked}
                type="button">{this.props.showCompleted ? "Hide Completed": "Show Completed"} 
            </button>
        );
    }
}

export default ShowCompletedItemsToggle;