import React, { Component } from "react";

class ExistingItems extends Component {

  deleteItemClicked = () => {
    this.props.deleteItemFunction(this.props.itemID);
  }

  completeItemClicked = () => {
    this.props.completeItemFunction(this.props.itemID, this.props.itemDescription);
  }

  modifyItemClicked = () => {
    this.props.modifyItemFunction(this.props.itemID, this.props.itemDescription);
  }

  render() {
    return (
      <div className={`container ${!this.props.showCompleted && this.props.itemCompleted ? "hidden" : ""}`}>
        <div className="row generalContent">
            <div className="col-md-6 col-12 text-center">{this.props.itemCompleted ? <b>COMPLETED: </b>:""}
            {this.props.itemDescription}</div>
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary"  
                type="button"onClick={this.modifyItemClicked}>modify</button></div>
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary" 
                type="button"onClick={this.completeItemClicked}>complete</button></div>
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary" 
                type="button"onClick={this.deleteItemClicked}>delete</button></div>
        </div>
      </div>
    );
  }
}

export default ExistingItems;