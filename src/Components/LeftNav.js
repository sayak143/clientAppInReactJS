import React, { Component } from 'react';

class LeftNav extends Component {
  constructor(){
    super();
    this.state = {
      taskCount: -1
    };
  }
  render() {
    this.state.taskCount++;
    return (
      <div>
        <div className="col-sm-3 col-md-2">
            <hr />
            <ul className="nav nav-pills nav-stacked">
                <li className="active">
                    <a href="#"><span className="badge pull-right">{this.state.taskCount}</span> Tasks </a>
                </li>
                <li><a href="#">Filter option 1</a></li>
                <li><a href="#">Filter option 2</a></li>
                <li><a href="#">Filter option 3</a></li>
                <li><a href="#">Filter option 4</a></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default LeftNav;
