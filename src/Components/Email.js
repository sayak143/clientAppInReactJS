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

var sendEmail = function(msg){
  // Add POST request for sending mail
  return function(dispatch){
      dispatch({
        type: "SEND_EMAIL",
        payload: msg
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

  onSendEmail(msg){
    this.props.dispatch(sendEmail(msg));
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
      <a href="#" className="list-group-item" id={this.props.id}>
      <div  onClick={this.onclickEmail.bind(this)} >
          <div className="checkbox">
              <label>
                  <input type="checkbox" />
              </label>
          </div>
          <span className="glyphicon glyphicon-star-empty"></span>
          <span className="name" style={fromDivStyle} >{this.props.email.CustomerEmailAddress} Itinerary number : {this.props.email.ItineraryNumber}</span>
          <span className="text-muted" style={bodyDivStyle}>  </span>
          <span className="badge">{this.props.email.PosName}</span>
          </div>
          <Conversation
            visibilityStyle={visibilityStyle}
            conversation={this.props.conversation}
            sendEmail={this.onSendEmail.bind(this)}/>
      </a>
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
