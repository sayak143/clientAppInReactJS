import React, { Component } from 'react';
import LoggedInState from './Components/LoggedInState';
import Login from './Components/Login';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      xmppConnection: null,
      newMsg: null
    }
  }

  isLoginSuccessful(success, connection){
    if(success){
      this.setState({
      loggedIn: success,
      xmppConnection: connection
      });
    }
  }

  onReceivingMessage(msg){
    this.setState({
      newMsg : msg
    });
  }

  render() {
    if(this.state.loggedIn){
      return (
          <div className="app">
            <LoggedInState xmppConnection={this.state.xmppConnection}
            newMessage={this.state.newMsg} />
          </div>
        );
    }else {
      return (
        <div className="app">
          <Login
            isLoginSuccessful={this.isLoginSuccessful.bind(this)}
            onReceivingMessage={this.onReceivingMessage.bind(this)}/>
        </div>
      );
    }
  }
}

export default App;
