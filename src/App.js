import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import AddItem from "./components/AddItem"
import ListItem from "./components/ListItem"

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
        <ListItem text="buy easter eggs" />
        <ListItem text="buy bread" />
        <ListItem text="buy eggs" />
        <ListItem text="buy jam" />
        <ListItem text="buy coke" />
        <ListItem text="buy beer" />
       </ul>
      </div>
    );
  }
}

export default App;
