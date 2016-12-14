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
            <LoggedInState/>
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
      agent: state.agent
  };
};
export default connect(mapStateToProps)(App);
