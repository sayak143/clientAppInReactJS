import React, { Component } from 'react';
import Email from './Email';

class EmailList extends Component {
  constructor(){
    super();
    this.state = {
      emailList: [],
    }
  }

  render(){
    var msg = this.props.newMessage;
    if(msg!= null){
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(atob(msg.textContent), "text/xml");
  		var taskObject = {};
  		var variables = xmlDoc.getElementsByTagName("variable");
      if(variables.length > 0){
        for (var index in variables) {
            var variable = variables[index];
            var isValuePresent = !!variable.getElementsByTagName && !!variable.getElementsByTagName("value")[0] && !!variable.getElementsByTagName("name")[0];
            if (isValuePresent) {
              taskObject[variable.getElementsByTagName("name")[0].innerHTML] = variable.getElementsByTagName("value")[0].innerHTML;
            }
          }
      }
      this.state.emailList = this.state.emailList.concat(taskObject);
    }
    var separator =':';
    return (
      <div>
          {this.state.emailList.map((email, i)=>{
            return <Email email={email} key={i} id={email.CustomerEmailAddress + separator + i}/>
          })}
      </div>
    )
  }
}

export default EmailList;
