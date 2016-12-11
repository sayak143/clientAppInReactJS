import React, { Component } from 'react';

class TopNav extends Component {
  render() {
    return (
      <div>

          <div className="row">
              <div className="col-sm-3 col-md-2">
                  <div className="btn-group">
                      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                          Mail <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Mail</a></li>
                          <li><a href="#">WeChat</a></li>
                          <li><a href="#">FaceBook</a></li>
                          <li><a href="#">Twitter</a></li>
                      </ul>
                  </div>
              </div>
              <div className="col-sm-9 col-md-10">
                  <div className="btn-group">
                      <button type="button" className="btn btn-default">
                          <div className="checkbox" style={{margin: 0}}>
                              <label>
                                  <input type="checkbox"/>
                              </label>
                          </div>
                      </button>
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                          <span className="caret"></span><span className="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                          <li><a href="#">All</a></li>
                          <li><a href="#">None</a></li>
                          <li><a href="#">Read</a></li>
                          <li><a href="#">Unread</a></li>
                          <li><a href="#">Starred</a></li>
                          <li><a href="#">Unstarred</a></li>
                      </ul>
                  </div>
                  <button type="button" className="btn btn-default" data-toggle="tooltip" title="Refresh">
                      <span className="glyphicon glyphicon-refresh"></span>
                  </button>
                  <div className="btn-group">
                      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                          More <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Mark all as read</a></li>
                          <li className="divider"></li>
                          <li className="text-center"><small className="text-muted">Select messages to see more actions</small></li>
                      </ul>
                  </div>
                  <div className="pull-right">
                      <span className="text-muted"><b>1</b>–<b>50</b> of <b>277</b></span>
                      <div className="btn-group btn-group-sm">
                          <button type="button" className="btn btn-default">
                              <span className="glyphicon glyphicon-chevron-left"></span>
                          </button>
                          <button type="button" className="btn btn-default">
                              <span className="glyphicon glyphicon-chevron-right"></span>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default TopNav;
