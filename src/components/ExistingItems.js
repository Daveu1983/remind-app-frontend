import React, { Component } from "react";
import { connect } from 'react-redux';
import {deleteItemAsync} from '../all-actions/delete-item';
import {completeItemAsync} from '../all-actions/complete-item';

class ExistingItems extends Component {

  deleteItemClicked = () => {
    this.props.deleteItem(this.props.itemID);
  }

  completeItemClicked = () => {
    this.props.completeItem(this.props.itemID);
  }

  modifyItemClicked = () => {
    this.props.modifyItemFunction(this.props.itemID);
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

const mapStateToProps = (state) => {
  return{

  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    deleteItem: (itemID) => dispatch(deleteItemAsync(itemID)),
    completeItem:(itemID, itemDescription) => dispatch(completeItemAsync(itemID, itemDescription))
  }
}
export default connect(mapStateToProps, dispatchStateToProps) (ExistingItems);