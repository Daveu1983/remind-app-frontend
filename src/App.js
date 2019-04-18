import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import AddItem from "./components/AddItem"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav text="Welcome to my app"/>
        <Nav text="Contact"/>
        <Nav text="About"/>
        <Nav text="add a list"/>
        <AddItem />
       <h4>here is a list of things I need to do</h4>
       <ul>
         <li>Buy cough sweets
          <button>Done</button>
          <button>Delete</button>
         </li>
         <li>Wash up
          <button>Done</button>
          <button>Delete</button> 
         </li>
         <li>Buy easter eggs
          <button>Done</button>
          <button>Delete</button>            
         </li>
       </ul>
      </div>
    );
  }
}

export default App;
