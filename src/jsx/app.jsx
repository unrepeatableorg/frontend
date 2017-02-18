import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Keys from './pages/keys.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/keys" component={Keys}/>
    <Route path="/about" component={About}/>
  </Router>,
  document.getElementById('app')
);
