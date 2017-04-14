// External dependencies
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

// Internal dependencies
import store, { history } from './store.js';
import Main from './Main.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Keys from './pages/Keys.jsx';

/**
 * @returns {ReactElement}
 */
const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home} />
        <Route path="/keys" component={Keys} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>
);

export default App;
