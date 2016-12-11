import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div>
        <p id={this.props.id}>{this.props.msg}</p>
      </div>
    );
  }
}

export default Message;
