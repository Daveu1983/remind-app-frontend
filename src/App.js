import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ExistingItems from "./components/ExistingItems";
import SummaryOfItems from "./components/SummaryOfItems";




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AddItem />
        <SummaryOfItems />
        <ExistingItems />
        <Footer />
      </div>
    );
  }
}

export default App;
