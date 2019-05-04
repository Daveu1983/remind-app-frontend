import React, { Component } from "react";

class ShowCompletedItemsToggle extends Component {

    showCompletedClicked = () => {
        this.props.showCompletedFunction();
      } 
    render() {
        return (
            <div className="container">
                <div className="col-md-2 col-12 text-center generalText">
                <button className="btn btn-secondary" onClick={this.showCompletedClicked}
                    type="button">{this.props.showCompleted ? "Hide Completed": "Show Completed"} </button></div>
            </div>
        );
    }
}

export default ShowCompletedItemsToggle;