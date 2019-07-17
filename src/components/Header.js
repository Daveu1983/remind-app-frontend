import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="container">
        <header> 
          <div className="row  generalText">
            <div className="col-12">
            <h1>Remind Me!</h1>
            </div>
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


export default Header;