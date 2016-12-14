import React, { Component } from 'react';
import EmailList from './EmailList';
import LeftNav from './LeftNav';
class LoggedInState extends Component {
  render(){
    return (
        <div className="container">
        <div className="row">
        <div className="col-sm-3 col-md-2">
            <a href="#" className="btn btn-danger btn-sm btn-block" role="button"> Sign out</a>
            </div></div>
            <hr />
            <div className="row">
                <LeftNav
                newMessage={this.props.newMessage} />

                <div className="col-sm-9 col-md-10">
                    <ul className="nav nav-tabs">
                        <li className="active">
                            <a href="#home" data-toggle="tab">
                                <span className="glyphicon glyphicon-inbox">
                                </span>Tasks
                            </a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade in active" id="home">
                            <div className="list-group" id="myclass">
                              <EmailList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    );
  }
}

export default LoggedInState;
