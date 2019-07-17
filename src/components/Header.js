import React, { Component } from "react";
import { connect } from 'react-redux';
import { getItemsAsync } from "../all-actions/count-items";



class Header extends Component {

  render() {
    return (
      <div className="container">
        <header> 
          <div className="row  generalText">
            <div className="col-12">
            <h1>Remind Me!{this.props.countItems.length}</h1>
            </div> 
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary"  
                type="button"onClick={this.props.setItems}>add</button></div>
            <div className="col-12">
              <h2>Use this website and never forget anything again</h2>
            </div>
            <div className="col-12">
              <h6>*well, you might do, but it won't be due to not being reminded</h6>
            </div>
          </div>
        </header>
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
    setItems: () => dispatch(getItemsAsync())
  }
}

export default connect(mapStateToProps, dispatchStateToProps) (Header);