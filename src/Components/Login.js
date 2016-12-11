import React, { Component } from 'react';
import Strophe from "../../node_modules/strophe";

class Login extends Component {
  constructor(){
    super();
    this.state = {
      connection: null
    }
  }
  componentWillMount(){
    this.setState({
      connection : new Strophe.Connection("http://localhost:7070/http-bind/")
    });
  }
  onClickConnect(){
    var button = document.getElementById('connect');
    if (button.value.toLowerCase() === 'connect') {
  	    button.value = 'disconnect';

  	    this.state.connection.connect(document.getElementById('jid').value,
		       document.getElementById('pass').value,
		       this.onConnect.bind(this), 5);
  	} else {
  	    button.value = 'connect';
  	    this.state.connection.disconnect();
  	}
  }
  onConnect(status, err) {
      if (status == Strophe.Status.CONNECTING) {
  		    document.getElementById('message').innerHTML = "Connecting to the server for authentication";
      } else if (status == Strophe.Status.CONNFAIL) {
  		    document.getElementById('message').innerHTML = 'Failed to connect.';
  	      document.getElementById('connect').value = 'connect';
      } else if (status == Strophe.Status.DISCONNECTING) {
  		    document.getElementById('message').innerHTML = 'Disconnecting from the server';
      } else if (status == Strophe.Status.DISCONNECTED) {
  		    document.getElementById('message').innerHTML = 'Disconnected.';
  	      document.getElementById('connect').value = 'connect';
      } else if (status == Strophe.Status.CONNECTED) {
          document.getElementById('message').innerHTML = 'Connection successful';
          this.props.isLoginSuccessful(true, this.state.connection);
  		    console.log('ECHOBOT:' + this.state.connection.jid + ' to talk to me.');
          var pres = new Strophe.Builder("presence");//.c("status").t("chat").up().c("show").t("chat");
          this.state.connection.send(pres);
          this.state.connection.addHandler(this.onMessage.bind(this), null, 'message');
      }
  }

  onMessage(msg) {
      this.props.onReceivingMessage(msg);
      return true;
  }

  onChangeConnectButton(msg) {
      ;
  }

  render() {
    return (
      <div><div className="row"><div className="col-md-6 col-md-offset-3"><div className="panel panel-login">
      <div className="panel-body">
  			<div className="row">
  				<div className="col-lg-12">
            <form id="login-form" method="post" role="form" style={{display: "block"}}>
              <div className="form-group">
                <input type="text" name="username" id="jid" className="form-control" placeholder="JID"/>
              </div>
              <div className="form-group">
                <input type="password" id='pass' className="form-control" placeholder="Password"/>
              </div>
              <div className="form-group">
                <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                <input id='connect' className="form-control btn btn-login" value="Connect"
                onClick={this.onClickConnect.bind(this)} onChange={this.onChangeConnectButton}/>
              </div>
              </div>
              </div>
	          </form>
            <div id='message' className="form-group"></div>
          </div>
        </div>
      </div></div></div></div>
    </div>
    );
  }
}

export default Login;
