import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Login from './Components/Login';
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path={"/"} component={App}>
      <IndexRoute component={App}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
