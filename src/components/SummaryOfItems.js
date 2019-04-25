import React, { Component } from "react";

class SummaryOfItems extends Component {
  render() {  
    return (
        <div className="container">
            <div className="row generalText">
                <div className="col-12">
                    <p>You have {this.props.itemCount} things to remember</p>
                </div>
            </div>
        </div>
    );
  }
}

export default SummaryOfItems;