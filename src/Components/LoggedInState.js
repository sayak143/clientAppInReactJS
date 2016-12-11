import React, { Component } from 'react';
import EmailList from './EmailList';
import LeftNav from './LeftNav';
class LoggedInState extends Component {
  render(){
    return (
        <div className="container">
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
                              <EmailList  xmppConnection={this.props.xmppConnection}
                              newMessage={this.props.newMessage}/>
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
