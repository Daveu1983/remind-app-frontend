import React, { Component } from "react";
import { connect } from 'react-redux';
import { getItemsAsync } from "../all-actions/count-items";

class SummaryOfItems extends Component {
  componentWillMount(){
    this.props.setItems()
  }
  render() {  
    return (
      <p>You have {this.props.itemCount} 
      {this.props.itemCount !== 1 ?  " items to remember": " item to remember"}</p>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    itemCount:state.countItems.length
  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    setItems: () => dispatch(getItemsAsync())
  }
}

export default connect(mapStateToProps, dispatchStateToProps) (SummaryOfItems);