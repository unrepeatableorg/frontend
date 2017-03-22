// External dependencies
import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Internal dependencies
import rootReducer from './reducers/index.js';
import posts from './data/posts.js';

// Default data
const defaultState = { posts };

// Redux store
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
