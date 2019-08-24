import React, { Component } from "react";
import { connect } from 'react-redux';
import {saveDescriptionChange} from '../all-actions/edit-item';

class EditItem extends Component {

    saveChangeClicked = () => {
        this.props.saveChangesFunction(this.props.itemID,this.props.newDescription, this.props.completed);
    } 

    inputBoxChanged = (event) =>{
        this.props.saveDescriptionChanges(event.target.value)
    }

    discardChangeClicked = () =>{
        this.props.discardChangesFunction(this.props.itemID)
    }


  render() {
    return (
      <div className="container" >
        <div className="row generalContent">
        <form className="formInTheCentre">
            <div className="row">
                <div className="col-12">    
                    <input onChange={this.inputBoxChanged} className="form-control" type="text"
                    defaultValue={this.props.itemDescription}/>
                </div>
                <div className="col-6 text-center">
                    <button className="btn btn-secondary" type="button" onClick={this.saveChangeClicked}>
                    Save changes
                    </button>
                </div>
                <div className="col-6 text-center">
                    <button className="btn btn-secondary" type="button" 
                    onClick={this.discardChangeClicked}>
                    discard changes
                    </button>
                </div>
            </div>
        </form>      
        </div>
    </div>
    );
  }
}
const mapStateToProps = (state) => {
    return{
      newDescription:state.editItem.newDescription,
    }
  }
  
  const dispatchStateToProps = (dispatch) =>{
    return{
      saveDescriptionChanges: (description) => {dispatch(saveDescriptionChange(description))},
    }
}

export default connect(mapStateToProps, dispatchStateToProps) (EditItem);