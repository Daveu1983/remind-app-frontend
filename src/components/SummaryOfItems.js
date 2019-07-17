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
  const filteredItems = filterItems(state.countItems)
  return{
    itemCount:filteredItems.length
  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    setItems: () => dispatch(getItemsAsync())
  }
}

const filterItems = (items) =>{
  const filteredItems = items.filter((item)=>{
    return (!item.completed)
  })
  return filteredItems
}

export default connect(mapStateToProps, dispatchStateToProps) (SummaryOfItems);