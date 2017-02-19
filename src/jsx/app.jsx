import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './main.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Keys from './pages/keys.jsx';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/keys" component={Keys} />
      <Route path="/about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
);
