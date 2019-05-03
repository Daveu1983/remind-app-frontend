import React, { Component } from 'react';
import uuid from "uuid/v4";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ExistingItems from "./components/ExistingItems";
import SummaryOfItems from "./components/SummaryOfItems";
import ShowDeletedItemsToggle from "./components/ShowDeletedItemsToggle";

class App extends Component {
  state = {
    items: [],
    showDeleted: false,
  }  

  addItem = (item) =>{
    let currentItems = this.state.items;
    const itemObject = {itemDescription: item, itemID: uuid(), itemDeleted: false}
    currentItems.push(itemObject);
    this.setState({
      items: currentItems,
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
    this.setState({
      items: currentItems
    })
  }

  showDeleted = () =>{
    let currentShowDeletedState = this.state.showDeleted
    currentShowDeletedState = !currentShowDeletedState
    this.setState({
      showDeleted: currentShowDeletedState
    })
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <AddItem addItemFunction={this.addItem}/>
        <SummaryOfItems itemCount = {this.state.items.length}/>
        <ShowDeletedItemsToggle showDeleted={this.state.showDeleted} showDeletedFunction={this.showDeleted} />        
        {
            this.state.items.map((element, index)=>{
              return <ExistingItems key={index} itemID={element.itemID} showDeleted={this.state.showDeleted}
              itemDeleted={element.itemDeleted}
              itemDescription={element.itemDescription} deleteItemFunction={this.deleteItem}/>
            })      
          }
        <Footer />
      </div>
    );
  }
}

export default App;
