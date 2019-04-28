import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ExistingItems from "./components/ExistingItems";
import SummaryOfItems from "./components/SummaryOfItems";



class App extends Component {
  state = {
    items: [],
  }  

  addItem = (item) =>{
    let currentItems = this.state.items;
    const itemObject = {itemDescription: item, itemID: (currentItems.length + 1), itemDeleted: false}
    currentItems.push(itemObject);
    this.setState({
      items: currentItems
    })
  }

  deleteItem = (itemToBeDeleted) =>{
    let currentItems = this.state.items;
    let filteredItems = currentItems.filter((element) => {
      return (element.itemID !==itemToBeDeleted);
    })
    this.setState({
      items: filteredItems
    })
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <AddItem addItemFunction={this.addItem}/>
        <SummaryOfItems itemCount = {this.state.items.length}/>
        {
          this.state.items.map((element, index)=>{
            return <ExistingItems key={index} itemNumber={element.itemID} 
            itemDescription={element.itemDescription} deleteItemFunction={this.deleteItem}/>      
          })
        }
        <Footer />
      </div>
    );
  }
}

export default App;
