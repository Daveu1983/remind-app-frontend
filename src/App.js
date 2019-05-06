import React, { Component } from 'react';
import uuid from "uuid/v4";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ExistingItems from "./components/ExistingItems";
import SummaryOfItems from "./components/SummaryOfItems";
import ShowCompletedItemsToggle from "./components/ShowCompletedItemsToggle";
import EditItem from "./components/EditItem";

class App extends Component {
  state = {
    items: [],
    showCompleted: false,
    numberOfLiveItems: 0
  }  

  addItem = (item) =>{
    const currentItems = this.state.items;
    const itemObject = {itemDescription: item, itemID: uuid(), itemCompleted:false, inEditing:false}
    currentItems.push(itemObject);
    this.setState({
      items: currentItems,
    })
    this.getLiveItems();
  }
  completeItem = (itemToBeCompleted) =>{
    const currentItems = this.state.items;
    currentItems.forEach((element, index) =>{
      if(itemToBeCompleted === element.itemID){
        const itemObject = {itemDescription: element.itemDescription, 
          itemID: element.itemID, itemCompleted: true, inEditing:element.inEditing}
          currentItems.splice(index,1,itemObject);
      }
    })
    this.getLiveItems();
  }
  getLiveItems = () => {
  const filteredItems = this.state.items.filter((item)=>{
    return (!item.itemCompleted)
  })
  this.setState({
    numberOfLiveItems: filteredItems.length
  }) 
}

  deleteItem = (itemToBeDeleted) =>{
    const currentItems = this.state.items;
    currentItems.forEach((element, index) =>{
      if(itemToBeDeleted === element.itemID){
          currentItems.splice(index,1,);
      }
    })
    this.setState({
      items: currentItems
    })
    this.getLiveItems();

  }

  modifyItem = (itemToBeModified) => {
    const currentItems = this.state.items;
    currentItems.map((element)=>{
      if(itemToBeModified === element.itemID){
        if(element.itemCompleted){
          alert("cannot edit completed item")
        }else{
          element.inEditing = true;
        }
      }
      return element;
    })
    this.setState({
      items: currentItems
    })
  }

  showCompleted = () =>{
    let currentShowCompletedState = this.state.showCompleted
    currentShowCompletedState = !currentShowCompletedState
    this.setState({
      showCompleted: currentShowCompletedState
    })
  }

  numberOfLiveItems = () =>{
    const currentItems = this.state.items.filter((item)=>{
      return (!item.Completed)

    })
    this.setState({
      numberOfLiveItems: currentItems.length
    }) 
  }

  saveChanges = (Id,newDescription) =>{
    const currentItems = this.state.items;
    currentItems.map((element)=>{
      if(Id === element.itemID){
        element.inEditing = false;
        element.itemDescription = newDescription;
      }
      return element;
    })
    this.setState({
      items: currentItems
    })
  }
  discardChanges = (Id) =>{
    const currentItems = this.state.items;
    currentItems.map((element)=>{
      if(Id === element.itemID){
        element.inEditing = false;
      }
      return element;
    })
    this.setState({
      items: currentItems
    })
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <AddItem addItemFunction={this.addItem}/>
        <div className="container" >
          <div className="row generalText">
            <div className="col-8">
              <SummaryOfItems itemCount={this.state.numberOfLiveItems}/>
            </div>
            <div className="col-4">
              <ShowCompletedItemsToggle showCompleted={this.state.showCompleted} 
              showCompletedFunction={this.showCompleted} />
            </div>
          </div>
        </div>

        {
            this.state.items.map((element, index)=>{
              if(element.inEditing){
                return <EditItem key={index} itemID={element.itemID} 
                itemDescription={element.itemDescription}
                saveChangesFunction={this.saveChanges} discardChangesFunction={this.discardChanges}/>
              }else{
                return <ExistingItems key={index} itemID={element.itemID} 
                showCompleted={this.state.showCompleted} 
                itemCompleted={element.itemCompleted} itemDescription={element.itemDescription} 
                completeItemFunction={this.completeItem} deleteItemFunction={this.deleteItem}
                modifyItemFunction={this.modifyItem}/>
              }
            })      
          }
        <Footer />
      </div>
    );
  }
}

export default App;
