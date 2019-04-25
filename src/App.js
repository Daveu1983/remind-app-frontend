import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ExistingItems from "./components/ExistingItems";
import SummaryOfItems from "./components/SummaryOfItems";



class App extends Component {
  state = {
    items: []
  }  

  addItem = (itemDescription) =>{
    let currentItems = this.state.items;
    currentItems.push(itemDescription);
    this.setState({
      items: currentItems
    })
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <AddItem addItemFunction={this.addItem}/>
        <SummaryOfItems itemCount = {this.state.items.length}/>
        {
          this.state.items.map(function(element, index){
            return <ExistingItems itemDescription={element} key={index}/>;          
        })
        }
        <Footer />
      </div>
    );
  }
}

export default App;
