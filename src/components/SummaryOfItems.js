import React, { Component } from "react";

class SummaryOfItems extends Component {
  render() {  
    return (
      <p>You have {this.props.itemCount} things to remember</p>
    );
  }
}

export default SummaryOfItems;