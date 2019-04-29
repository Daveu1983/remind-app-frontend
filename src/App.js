import React, { Component } from 'react';
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
    liveItems:[],
    showDeleted: false,
    showDeletedText:"show deleted",
    showItems: []
  }  

  addItem = (item) =>{
    let currentItems = this.state.items;
    let currentShowDeletedState = this.state.showDeleted
    let currentShowItems = this.state.showItems
    const itemObject = {itemDescription: item, itemID: (currentItems.length + 1), itemDeleted: false}
    currentItems.push(itemObject);
    let currentLiveItems = currentItems.filter((element) => {
      return (!(element.itemDeleted));
    })
    this.setState({
      items: currentItems,
      liveItems: currentLiveItems
    })
    if(currentShowDeletedState){
      currentShowItems = currentItems
    }else{
      currentShowItems = currentLiveItems
    }
    this.setState({
      showItems: currentShowItems
    })
  }

  deleteItem = (itemToBeDeleted) =>{
    let currentItems = this.state.items;
    let currentShowDeletedState = this.state.showDeleted
    let currentShowItems = this.state.showItems
    currentItems.forEach((element, index) =>{
      if(itemToBeDeleted === element.itemID){
        const itemObject = {itemDescription: element.itemDescription, 
          itemID: element.itemID, itemDeleted: true}
          currentItems.splice(index,1,itemObject);
      }
    })
    let currentLiveItems = currentItems.filter((element) => {
      return (!(element.itemDeleted));
    })
    this.setState({
      items: currentItems,
      liveItems: currentLiveItems
    })
    if(currentShowDeletedState){
      currentShowItems = currentItems
    }else{
      currentShowItems = currentLiveItems
    }
    this.setState({
      showItems: currentShowItems
    })
  }

  showDeleted = () =>{
    let currentShowDeletedState = this.state.showDeleted
    currentShowDeletedState = !currentShowDeletedState
    let deletedButtonText = this.state.showDeletedText
    if (currentShowDeletedState){
      deletedButtonText = "hide deleted"
    }else{
      deletedButtonText = "show deleted"
    }
    this.setState({
      showDeleted: (currentShowDeletedState)
    })
    let currentItems = this.state.items
    let currentLiveItems = this.state.liveItems
    let currentShowItems = this.state.showItems
    if(currentShowDeletedState){
      currentShowItems = currentItems
    }else{
      currentShowItems = currentLiveItems
    }
    this.setState({
      showItems: currentShowItems
    })


    this.setState({
      showDeletedText: deletedButtonText
    })
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <AddItem addItemFunction={this.addItem}/>
        <SummaryOfItems itemCount = {this.state.liveItems.length}/>
        <ShowDeletedItemsToggle showDeletedFunction={this.showDeleted} showDeletedText={this.state.showDeletedText}/>        
        {
            this.state.showItems.map((element, index)=>{
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
