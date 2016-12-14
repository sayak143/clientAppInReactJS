import React, { Component } from 'react';
import Message from './Message';

class Conversation extends Component {
  appendToConversation(){
    this.setState({
      conversation : this.props.conversation.concat(document.getElementById('agentMessage').value)
    }
    );
  }

  render() {
    return (
      <div>
        <div className={this.props.visibilityStyle} >
          {
            this.props.conversation.map((message, i)=>{
              if(!!message.text && message.text.length > 0){
                return <Message msg={message.text} key={i}/>
              }
            })
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
