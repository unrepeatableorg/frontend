// External dependencies
import omit from 'lodash/omit';

// Internal dependencies
import { CREATE_POST } from '../actions/actionTypes.js';

/**
 * @param {Array} [state]
 * @param {string} action
 *
 * @returns {Object}
 */
function posts(state = [], action) {
  switch (action.type) {
  case CREATE_POST:
    return [omit(action, 'type')].concat(state);
  default:
    return state;
  }
}

export default posts;
