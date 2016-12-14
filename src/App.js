import React, { Component } from 'react';
import LoggedInState from './Components/LoggedInState';
import Login from './Components/Login';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    if(this.props.agent.loggedIn){
      return (
          <div className="app">
            <LoggedInState newMessage={this.props.emailList.emailList} />
          </div>
        );
    }else {
      return (
        <div className="app">
          <Login/>
        </div>
      );
    }
  }
}
const mapStateToProps = (state)=>{
  return {
      agent: state.agent,
      emailList: state.emailList
  };
};
export default connect(mapStateToProps)(App);
