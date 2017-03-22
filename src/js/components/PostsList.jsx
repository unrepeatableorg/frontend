// External dependencies
import React from 'react';

// Internal dependencies
import Post from './Post.jsx';

/**
 * @param {Object} props
 *
 * @returns {ReactElement}
 */
const PostsList = props => (
  <div className="posts-list">
    {props.posts.map(p => <Post post={p} key={p.id} />)}
  </div>
);

export default PostsList;
