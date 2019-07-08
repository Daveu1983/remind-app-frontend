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

class App extends Component {
  state = {
    items: [],
    showCompleted: false,
    numberOfLiveItems: 0,
    inEditing:false,
    itemInEditing:0
  }  




  componentWillMount(){
    this.getItems();
  }

  getItems(){
    axios.get('https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks')
    .then(response => {
     this.setState({items:response.data.tasks})
     this.getLiveItems();
     })
     .catch(function (error) {
     console.log(error);
     })

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
      this.getItems();
      this.getLiveItems();
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
      this.getItems();
      this.getLiveItems();
    })
    .catch(function (error) {
      console.log(error);
    });
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
    axios.delete(`https://sr4vx99h08.execute-api.eu-west-2.amazonaws.com/dev/tasks/${itemToBeDeleted}`)
    .then(() => {
      this.getItems();
      this.getLiveItems();
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
      this.getItems();
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
        <Header test={this.props.countItems}/>
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
            this.state.items.map((element, index) =>{
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
    countItems:state.countItems
  }
}

const dispatchStateToProps = (dispatch) =>{
  return{
    getItems: () =>
      dispatch({
        type:"GET_ITEMS"
      })
  }
}



export default connect(mapStateToProps, dispatchStateToProps) (App);
