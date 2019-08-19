import React, { Component } from "react";
import axios from 'axios';
import { connect } from 'react-redux';
import { saveDescription } from "../all-actions/add-item";
import { addItemAsync } from "../all-actions/add-item";

class AddItem extends Component {

  state = {
    username:"",
    users:[]
  }
  componentWillMount(){
    this.getUsers()
  }

  getUsers(){
    axios.get('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/users')
    .then(response =>{
      this.setState({users:response.data.tasks})
    })
  .catch(function (error) {
  console.log(error);
    })
  }

  addItemClicked = () => {
    if ((this.state.username === undefined) || (this.state.username === "")){
      alert("select  user");
    } else{
    this.props.addItemFunction(this.props.description, this.state.username);
  }
} 

  inputBoxChanged = (event) =>{
    this.props.saveDescriptionChanges(event.target.value)
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
                     { 
                        this.state.users.map((element, index)=>{

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
  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    saveDescriptionChanges: (description) => {dispatch(saveDescription(description))},
    addItemFunction:(description, username) =>{dispatch(addItemAsync(description,username))}
  }

}

export default connect(mapStateToProps, dispatchStateToProps) (AddItem);