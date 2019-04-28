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
    liveItems:[]
  }  

  addItem = (item) =>{
    let currentItems = this.state.items;
    const itemObject = {itemDescription: item, itemID: (currentItems.length + 1), itemDeleted: false}
    currentItems.push(itemObject);
    let filteredItems = currentItems.filter((element) => {
      return (!(element.itemDeleted));
    })
    this.setState({
      items: currentItems,
      liveItems: filteredItems
    })
  }

  deleteItem = (itemToBeDeleted) =>{
    let currentItems = this.state.items;
    currentItems.forEach((element, index) =>{
      if(itemToBeDeleted === element.itemID){
        const itemObject = {itemDescription: element.itemDescription, 
          itemID: element.itemID, itemDeleted: true}
          currentItems.splice(index,1,itemObject);
      }
    })
    let filteredItems = currentItems.filter((element) => {
      return (!(element.itemDeleted));
    })
    this.setState({
      liveItems: filteredItems
    })
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <AddItem addItemFunction={this.addItem}/>
        <SummaryOfItems itemCount = {this.state.liveItems.length}/>
        {
          this.state.liveItems.map((element, index)=>{
            return <ExistingItems key={index} itemID={element.itemID} 
            itemDescription={element.itemDescription} deleteItemFunction={this.deleteItem}/>      
          })
        }
        <Footer />
      </div>
    );
  }
}

export default App;
