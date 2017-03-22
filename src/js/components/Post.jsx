// External dependencies
import React from 'react';

/**
 * @params {Object} props
 * @params {Object} props.post
 * @params {integer} props.post.id
 * @params {string} props.post.title
 * @params {string} props.post.date
 * @params {string} props.post.media
 * @params {string} [props.post.author]
 *
 * @returns {ReactElement}
 */
const Post = props => {
  /**
   * @params {string} imageUrl
   *
   * @returns {ReactElement}
   */
  const getImage = imageUrl => (
    <img className="post__img" src={imageUrl} />
  );

  /**
   * @params {string} videoCode
   *
   * @returns {ReactElement}
   */
  const getVideo = videoCode => (
    <div className="post__embedded-video"
         dangerouslySetInnerHTML={{__html: videoCode}}>
    </div>
  );

  return (
    <div className="post">
      {props.post.type === 'image' && getImage(props.post.media)}
      {props.post.type === 'embedded-video' && getVideo(props.post.media)}
      <div className="post__info">
        <div className="post__title"> {props.post.title} </div>
        <div className="post__creation-info">
          Added by {props.post.author ? props.post.author : 'anonymous'} on {props.post.date}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    title: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    media: React.PropTypes.string.isRequired,
    author: React.PropTypes.string,
  })
};

export default Post;
