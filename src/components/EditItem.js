import React, { Component } from "react";

class EditItem extends Component {
    state = {
        item:{itemDescription: "", itemID:"", completed: false}
      }

    saveChangeClicked = () => {
        this.props.saveChangesFunction(this.props.itemID,this.state.itemDescription, this.props.completed);
    } 

    inputBoxChanged = (event) =>{
        this.setState({itemDescription: event.target.value})
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

export default EditItem;