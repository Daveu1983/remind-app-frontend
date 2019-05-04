import React, { Component } from "react";

class SummaryOfItems extends Component {
  render() {  
    return (
      <p>You have {this.props.itemCount} 
      {this.props.itemCount !== 1 ?  " items to remember": " item to remember"}</p>
    )
  }
}

export default SummaryOfItems;