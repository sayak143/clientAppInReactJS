import React, { Component } from 'react';
import Message from './Message';
class Conversation extends Component {
  constructor(){
    super();
    this.state = {
      conversation: [""],
    }
  }

  appendToConversation(){
    this.setState({
      conversation : this.state.conversation.concat(document.getElementById('agentMessage').value)
    }
    );
  }
  render() {
    return (
      <div>
        <div className={this.props.visibilityStyle} >
          {
            this.state.conversation.map((message, i)=>{
              return <Message msg={message} key={i} id={i}/>
            }
            )
          }
          <form onSubmit={this.appendToConversation.bind(this)}>
            <input id="agentMessage"/>
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Conversation;
