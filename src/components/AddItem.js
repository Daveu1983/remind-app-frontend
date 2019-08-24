import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveDescription } from "../all-actions/add-item";
import { addItemAsync } from "../all-actions/add-item";
import { clearDescription } from "../all-actions/add-item";
import { getUsersAsync } from '../all-actions/users';
import { setUserName } from '../all-actions/users';
import { clearUsername } from '../all-actions/users';

class AddItem extends Component {

  componentWillMount(){
    this.props.getUsers()
  }

  addItemClicked = () => {
    if ((this.props.username === undefined) || (this.props.username === "")){
      alert("select  user");
    } else{
    this.props.addItemFunction(this.props.description, this.props.username);
    this.props.clearUsernameAndDescription()
  }
} 

  inputBoxChanged = (event) =>{
    this.props.saveDescriptionChanges(event.target.value)
  }

  saveUser = (event) =>{
    this.props.setUsername(event.target.value)
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
                     { 
                        this.props.users.map((element, index)=>{

                          return <option key={index} value={element.userId}>{element.username} </option>
                        })
                    }
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

const mapStateToProps = (state) => {
  return{
    description:state.addItem.description,
    users:state.countUsers.users,
    username:state.countUsers.username
  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    saveDescriptionChanges: (description) => {dispatch(saveDescription(description))},
    addItemFunction:(description, username) =>{dispatch(addItemAsync(description,username))},
    getUsers:()=>{dispatch(getUsersAsync())},
    setUsername:(userName)=>dispatch(setUserName(userName)),
    clearUsernameAndDescription:()=>{
      dispatch(clearUsername())
      dispatch(clearDescription())
    }
  }

}

export default connect(mapStateToProps, dispatchStateToProps) (AddItem);