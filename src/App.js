import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ExistingItems from "./components/ExistingItems";
import SummaryOfItems from "./components/SummaryOfItems";
import ShowCompletedItemsToggle from "./components/ShowCompletedItemsToggle";
import EditItem from "./components/EditItem";
import { connect } from 'react-redux';
import { getItemsAsync } from "./all-actions/count-items";
import { saveItemChangeAsync } from "./all-actions/edit-item";
import { toggleCompletedFunction } from "./all-actions/count-items";
import { editItem } from "./all-actions/count-items";
import { getOutOfEditMode } from "./all-actions/count-items";
import { getNumberOfLiveItems } from "./all-reducers/count-items";

class App extends Component {

  componentWillMount(){
    this.props.setItems()
  }

  modifyItem = (itemToBeModified) => {
    const currentItems = this.props.countItems;
    currentItems.forEach((element)=>{
      if(itemToBeModified === element.itemID){
        if(element.completed){
          alert("cannot edit completed item")
        }else{
          this.props.editItemFunction(itemToBeModified)
        }
      }
    })
  }

  saveChanges = (Id,newDescription, completed) =>{
    console.log(Id,newDescription,completed)
    this.props.saveItemChanges(Id,newDescription, completed)
  }

  discardChanges = () =>{
    this.props.discardChange()
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
              if (this.props.inEditing) {
                if (this.props.itemInEditing === element.itemID){
                  return <EditItem 
                  key={index} 
                  itemID={element.itemID} 
                  completed={element.completed}
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
    showCompleted:state.countItems.showCompleted,
    inEditing:state.countItems.inEditing,
    itemInEditing:state.countItems.itemInEditing
  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    setItems: () => dispatch(getItemsAsync()),
    toggleCompletedItems: (showComplete) => dispatch(toggleCompletedFunction(showComplete)),
    editItemFunction: (itemToBeModified) =>dispatch(editItem(itemToBeModified)),
    discardChange: () => dispatch(getOutOfEditMode()),
    saveItemChanges:(Id,newDescription, completed) =>dispatch(saveItemChangeAsync(Id,newDescription, completed))
  }
}

export default connect(mapStateToProps, dispatchStateToProps) (App);
