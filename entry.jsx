// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

// Internal dependencies
import App from './src/js/App.jsx';

/**
 * @param {ReactElement} Component
 */
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./src/js/App.jsx', () => {
    render(App);
  });
}

// Load main scss stylesheet
require('./src/scss/main.scss');
