import React, { Component } from 'react';
import Conversation from './Conversation';

class Email extends Component {
  constructor(){
    super();
    this.state = {
      conversationVisibility: false
    }
  }

  onclickEmail(){
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
          <span className="name" style={fromDivStyle} >{this.props.email.CustomerEmailAddress} Itinerary number: {this.props.email.ItineraryNumber}</span>
          <span className="text-muted" style={bodyDivStyle}>  </span>
          <span className="badge">{this.props.email.PosName}</span>
      </a>
      <Conversation visibilityStyle={visibilityStyle}/>
      </div>
    );
  }
}

export default Email;
