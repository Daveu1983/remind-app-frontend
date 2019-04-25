import React, { Component } from "react";

class ExistingItems extends Component {
  render() {
    return (
      <div className="container">
        <div className="row generalContent">
            <div className="col-md-7 col-12 text-center">{this.props.itemDescription}</div>
            <div className="col-md-3 col-12 text-center"><button className="btn btn-secondary" name="modify" 
                type="submit">modify</button></div>
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary" name="delete" 
                type="submit">delete</button></div>
        </div>
      </div>
    );
  }
}

export default ExistingItems;