import React, { Component } from "react";

class AddItem extends Component {

  state = {
    item:{itemDescription: "", itemID:"", completed: false, inEditing: false, UserId:""},
  }

  addItemClicked = () => {
    this.props.addItemFunction(this.state.itemDescription, this.state.username);

  } 

  inputBoxChanged = (event) =>{
    this.setState({itemDescription: event.target.value})
  }

  saveUser = (event) =>{
    this.setState({username:event.target.value})
  }

  render() {
    return (
      <div className="container generalContent">
        <form className="formInTheCentre">
            <div className="row">
                <div className="col-10">  
                    <input onChange={this.inputBoxChanged} className="form-control" type="text"
                    placeholder="What do you want to be reminded of? "/>
                </div>
                <div className="col-2">
                    <select onChange={this.saveUser}>
                      <option value="0">Select a user below</option>
                      <option value="1">Susan</option>
                      <option value="2">Geoff</option>
                      <option value="3">Dave</option>
                    </select >
                  </div>
                <div className="col-12 text-center">
                    <button type="reset" className="btn btn-secondary"  onClick={this.addItemClicked}>
                    Remind me!
                    </button>
                </div>
            </div>
        </form>
      </div>
    );
  }
}

export default AddItem;