// External dependencies
import React from 'react';

// Internal dependencies
import PostsList from '../components/PostsList.jsx';

/**
 * @param {Object} props
 *
 * @returns {ReactElement}
 */
const Home = props => (
  <div className="view">
    <div className="container">
      <PostsList {...props} />
    </div>
  </div>
);

export default Home;
