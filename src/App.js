import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ExistingItems from "./components/ExistingItems";
import SummaryOfItems from "./components/SummaryOfItems";
import ShowCompletedItemsToggle from "./components/ShowCompletedItemsToggle";
import EditItem from "./components/EditItem";
import axios from "axios";

class App extends Component {
  state = {
    items: [],
    showCompleted: false,
    numberOfLiveItems: 0,
  }  

  componentWillMount(){
    this.getItems();
  }

  getItems(){
    axios.get('https://nz84q7yyv9.execute-api.eu-west-2.amazonaws.com/dev/tasks')
    .then(response => {
     this.setState({items:response.data.tasks})
     })
     .catch(function (error) {
     console.log(error);
     })
  }

  addItem = (item, userId) =>{
    if ((userId === undefined) || (userId === "0")){
      alert("select  user");
    } else{
    axios.post('https://nz84q7yyv9.execute-api.eu-west-2.amazonaws.com/dev/tasks',{
      itemDescription:item,
      completed:false,
      userId:parseInt(userId)
    })
    .then(() => {
      this.getItems();
    })
    .catch(function (error) {
      console.log(error);
    });
    this.getLiveItems();
    }
  }
  completeItem = (itemToBeCompleted) =>{
    axios.put('https://nz84q7yyv9.execute-api.eu-west-2.amazonaws.com/dev/tasks',{
      itemID: itemToBeCompleted,
    })
    .then(() => {
      this.getItems();
    })
    .catch(function (error) {
      console.log(error);
    });
    this.getLiveItems();
  }
  

  getLiveItems = () => {
  const filteredItems = this.state.items.filter((item)=>{
    return (!item.completed)
  })
  this.setState({
    numberOfLiveItems: filteredItems.length
  }) 
}

  deleteItem = (itemToBeDeleted) =>{
    axios.delete(`https://nz84q7yyv9.execute-api.eu-west-2.amazonaws.com/dev/tasks/${itemToBeDeleted}`)
    .then(() => {
      this.getItems();
    })
    .catch(function (error) {
      console.log(error);
    });
    this.getLiveItems();
  }
  

  modifyItem = (itemToBeModified) => {
    const currentItems = this.state.items;
    currentItems.map((element)=>{
      if(itemToBeModified === element.itemID){
        if(element.completed){
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
      return (!item.completed)

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
                itemCompleted={element.completed} itemDescription={element.itemDescription} 
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
