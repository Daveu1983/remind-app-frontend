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
import { toggleCompletedFunction } from "./all-actions/count-items";
import { getNumberOfLiveItems } from "./all-reducers/count-items";

class App extends Component {
  state = {
    inEditing:false,
    itemInEditing:0
  }  

  componentWillMount(){
    this.props.setItems()
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

  toggleCompleted = () =>{
    this.props.toggleCompletedItems(this.props.showCompleted)
  }

  render() { 
    return (
      <div className="App">
        <Header />
        <AddItem />
        <div className="container" >
          <div className="row generalText">
            <div className="col-8">
              <SummaryOfItems numberOfLiveItems={this.props.numberOfLiveItems} />
            </div>
            <div className="col-4">
              <ShowCompletedItemsToggle showCompleted={this.props.showCompleted} 
              showCompletedFunction={this.toggleCompleted} />
            </div>
          </div>
        </div>
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
                showCompleted={this.props.showCompleted} 
                itemCompleted={element.completed} itemDescription={element.itemDescription} 
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
    numberOfLiveItems:getNumberOfLiveItems(state.countItems),
    showCompleted:state.countItems.showCompleted
  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    setItems: () => dispatch(getItemsAsync()),
    toggleCompletedItems: (showComplete) => dispatch(toggleCompletedFunction(showComplete))
  }
}

export default connect(mapStateToProps, dispatchStateToProps) (App);
