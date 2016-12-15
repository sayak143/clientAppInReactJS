import React, { Component } from 'react';
import Message from './Message';

class Conversation extends Component {

  onSendEmail(){
    this.props.sendEmail(document.getElementById('agentMessage').value);
    document.getElementById('agentMessage').value = "";
  }

  render() {
    var separatorLineStyle = {
      height:'1px',
      border:'none',
      color:'#ddd',
      backgroundColor:'#ddd'
    }

    return (
      <div>
        <div className={this.props.visibilityStyle} >
        <hr style={separatorLineStyle}/>
          {
            this.props.conversation.map((message, i)=>{
              if(!!message.text && message.text.length > 0){
                return <Message msg={message.text} key={i}/>
              }
            })
          }
          <form className="form-group" onSubmit={this.onSendEmail.bind(this)}>
            <input id="agentMessage" placeholder='Write your message'/>
          </form>
        </div>
      </div>
    );
  }
}


export default Conversation;
