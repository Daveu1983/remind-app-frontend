import React, { Component } from "react";

class ExistingItems extends Component {
  render() {
    return (
        <div className="container">
            <div class="row generalText">
                <div className="col-12">
                    <p>You have 0 tasks, 0 due within the next 24hrs and 0 overdue </p>
                </div>
            </div>
        <div className="row generalContent">
            <div className="col-md-4 col-12 text-center">example</div>
            <div className="col-md-3 col-12 text-center"> 12/11/2020 12:00</div>
            <div className="col-md-3 col-12 text-center"><button className="btn btn-secondary" name="modify" 
                type="submit">modify</button></div>
            <div className="col-md-2 col-12 text-center"><button className="btn btn-secondary" name="delete" 
                type="submit">delete</button></div>
        </div>
      </div>
    );
  }
}

export default ExistingItems;