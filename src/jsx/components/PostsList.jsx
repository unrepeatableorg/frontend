import React from 'react';

import Post from './Post.jsx';

class PostsList extends React.Component {

  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  render() {
    const posts = this.state.posts.map(p => (
      <Post post={p} key={p.id} />
    ));

    return (
      <div className="posts-list">
        {posts}
      </div>
    );
  }
}

export default PostsList;
