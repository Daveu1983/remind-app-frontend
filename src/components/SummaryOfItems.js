import React, { Component } from "react";

let totalTasks = 5;
let dueSoonTasks = 3;
let overdueTasks = 1;
let wordTask = "tasks";

if (totalTasks === 1){
    wordTask = "task";
}

class SummaryOfItems extends Component {
  render() {
    if (totalTasks > 0){    
        return (
            <div className="container">
                <div class="row generalText">
                    <div className="col-12">
                        <p>You have {totalTasks} {wordTask}, {dueSoonTasks} due within the next 24hrs
                        and {overdueTasks} overdue</p>
                    </div>
                </div>
            </div>
        );
    } else{
        return(
            <div className="container">
                <div class="row generalText">
                    <div className="col-12">
                        <p>Add a task above and get started</p>
                    </div>
                </div>
            </div>
        );
    }
  }
}

export default SummaryOfItems;