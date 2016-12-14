import React, { Component } from 'react';
import Conversation from './Conversation';
import axios from 'axios';
import {connect} from 'react-redux';

var getConversation = function(){
  return function(dispatch){
    axios.get("http://rest.learncode.academy/api/test123/tweets")
    .then((response)=>{
      dispatch({
        type: "SET_CONVERSATION",
        payload: response.data
      })
    })
  }
}

class Email extends Component {
  constructor(){
    super();
    this.state = {
      conversationVisibility: false
    }
  }

  onclickEmail(){
    this.props.dispatch(getConversation());
    this.setState({
      conversationVisibility : !this.state.conversationVisibility
    });
  }

  render() {
    var fromDivStyle = {
        display: 'inline-block',
        minWidth: 120
    };
    var bodyDivStyle = {
        fontSize: 11
    };

    var visibilityStyle = this.state.conversationVisibility ? "" : "hidden";
    return (
      <div>
      <a href="#" className="list-group-item" id={this.props.id} onClick={this.onclickEmail.bind(this)} >
          <div className="checkbox">
              <label>
                  <input type="checkbox" />
              </label>
          </div>
          <span className="glyphicon glyphicon-star-empty"></span>
          <span className="name" style={fromDivStyle} >{this.props.email.CustomerEmailAddress} Itinerary number : {this.props.email.ItineraryNumber}</span>
          <span className="text-muted" style={bodyDivStyle}>  </span>
          <span className="badge">{this.props.email.PosName}</span>
      </a>
      <Conversation visibilityStyle={visibilityStyle} conversation={this.props.conversation}/>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
      conversation: state.conversation.conversation
  };
};

export default connect(mapStateToProps)(Email);
