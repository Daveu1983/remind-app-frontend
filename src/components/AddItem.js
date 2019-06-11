import React, { Component } from "react";

class AddItem extends Component {

  state = {
    item:{itemDescription: "", itemID:"", completed: false, inEditing: false},
  }

  addItemClicked = () => {
    this.props.addItemFunction(this.state.itemDescription);

  } 

  inputBoxChanged = (event) =>{
    this.setState({itemDescription: event.target.value})
  }

  render() {
    return (
      <div className="container generalContent">
        <form className="formInTheCentre">
            <div className="row">
                <div className="col-12">  
                    <input onChange={this.inputBoxChanged} className="form-control" type="text"
                    placeholder="What do you want to be reminded of? "/>
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