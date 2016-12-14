import React, { Component } from 'react';
import Email from './Email';
import {connect} from 'react-redux';

class EmailList extends Component {
  render(){
    return (
      <div>
          {this.props.emailList.map((email, i)=>{
            return <Email email={email} key={i} />
          })}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
      emailList: state.emailList.emailList
  };
};

export default connect(mapStateToProps)(EmailList);
