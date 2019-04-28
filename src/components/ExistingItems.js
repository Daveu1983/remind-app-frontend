import React, { Component } from "react";

class ExistingItems extends Component {

  deleteItemClicked = () => {
    this.props.deleteItemFunction(this.props.itemNumber);
  }
  render() {
    return (
      <div className="container">
        <div className="row generalContent">
            <div className="col-md-7 col-12 text-center">Task Description {this.props.itemDescription}</div>
            <div className="col-md-1 col-12 text-center">Task Number {this.props.itemNumber}</div>
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary"  
                type="button">modify</button></div>
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary" 
                type="button"onClick={this.deleteItemClicked}>delete</button></div>
        </div>
      </div>
    );
  }
}

export default ExistingItems;