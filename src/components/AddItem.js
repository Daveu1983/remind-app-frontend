import React, { Component } from "react";

class AddItem extends Component {
  render() {
    return (
      <div className="container generalContent">
        <form className="formInTheCentre">
            <div className="row">
                <div className="col-12">    
                    <label htmlFor="reminder" className="sr-only">remind me</label>
                    <input id="reminder" className="form-control" type="text"name="reminder" 
                    placeholder="What do you want to be reminded of? "/>
                </div>
                <div className="col-12 col-offset">
                    <label htmlFor="dateToRemind" className="sr-only">date</label>
                    <input id="dateToRemind" className="form-control" type="datetime-local"
                    name="whenToRemind"/>
                </div>
                <div className="col-12 text-center">
                    <button id="remindMe" className="btn btn-secondary" 
                    name="reminder" type="submit">Remind me!</button>
                </div>
            </div>
        </form>
      </div>
    );
  }
}

export default AddItem;