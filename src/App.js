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
import { connect } from 'react-redux';
import { getItemsAsync } from "./all-actions/count-items";

class App extends Component {
  state = {
    showCompleted: false,
    inEditing:false,
    itemInEditing:0
  }  

  componentWillMount(){
    this.props.setItems()
  }

  addItem = (item, userId) =>{
    if ((userId === undefined) || (userId === "0")){
      alert("select  user");
    } else{
    axios.post('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks',{
      itemDescription:item,
      completed:false,
      userId:parseInt(userId)
    })
    .then(() => {
      this.props.setItems();
    })
    .catch(function (error) {
      console.log(error);
    });

    }
  }
  completeItem = (itemToBeCompleted, description) =>{
    axios.put('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks',{
      itemID: itemToBeCompleted,
      itemDescription:description,
      completed: true

    })
    .then(() => {
      this.props.setItems();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  deleteItem = (itemToBeDeleted) =>{
    axios.delete(`https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks/${itemToBeDeleted}`)
    .then(() => {
      this.props.setItems();
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  

  modifyItem = (itemToBeModified) => {
    const currentItems = this.state.items;
    currentItems.map((element)=>{
      if(itemToBeModified === element.itemID){
        if(element.completed){
          alert("cannot edit completed item")
        }else{
          this.setState({inEditing:true, itemInEditing:itemToBeModified});
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

  saveChanges = (Id,newDescription, completed) =>{
    axios.put('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks',{
      itemID: Id,
      itemDescription:newDescription,
      completed: completed
    })
    .then(() => {
      this.setItems();
    })
    .catch(function (error) {
      console.log(error);
    });
    this.setState({inEditing:false});
  }
  discardChanges = (Id) =>{
    this.setState({inEditing:false});
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <AddItem addItemFunction={this.addItem}/>
        <div className="container" >
          <div className="row generalText">
            <div className="col-8">
              <SummaryOfItems numberOfLiveItems={this.props.numberOfItems} />
            </div>
            <div className="col-4">
              <ShowCompletedItemsToggle showCompleted={this.state.showCompleted} 
              showCompletedFunction={this.showCompleted} />
            </div>
          </div>
        </div>
        {console.log(this.props.countItems)}
        {
            // eslint-disable-next-line array-callback-return
            this.props.countItems.map((element, index) =>{
              if (this.state.inEditing) {
                if (this.state.itemInEditing === element.itemID){
                  return <EditItem 
                  key={index} 
                  itemID={element.itemID} 
                  itemDescription={element.itemDescription}
                  saveChangesFunction={this.saveChanges} discardChangesFunction={this.discardChanges}/>
                }
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

const mapStateToProps = (state) => {
  return{
    countItems:state.countItems.items,
    numberOfItems:state.countItems.numberOfItems
  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    setItems: () => dispatch(getItemsAsync())
  }
}

export default connect(mapStateToProps, dispatchStateToProps) (App);
