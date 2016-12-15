import React, { Component } from 'react';
import {connect} from 'react-redux';

class LeftNav extends Component {
  render() {
    return (
      <div>
        <div className="col-sm-3 col-md-2">
            <hr />
            <ul className="nav nav-pills nav-stacked">
                <li className="active">
                    <a href="#"><span className="badge pull-right">{this.props.emailList.length}</span> Tasks </a>
                </li>
                <li><a href="#">Filter option 1</a></li>
                <li><a href="#">Filter option 2</a></li>
                <li><a href="#">Filter option 3</a></li>
                <li><a href="#">Filter option 4</a></li>
            </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
      emailList: state.emailList.emailList
  };
};

export default connect(mapStateToProps)(LeftNav);
