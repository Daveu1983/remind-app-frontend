import React, { Component } from "react";
import axios from 'axios';

class AddItem extends Component {

  state = {
    item:{itemDescription: "", itemID:"", completed: false,  userId:""},
    users:[]
  }
  componentWillMount(){
    this.getUsers()
  }

  getUsers(){
    axios.get('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/users')
    // need to refactor back-end app so that users brings back users and not tasks
    .then(response =>{
      this.setState({users:response.data.tasks})
    })
  .catch(function (error) {
  console.log(error);
    })
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

export default AddItem;