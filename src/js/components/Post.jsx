import React from 'react';

/**
 * @params {Object} props
 * @params {Object} props.post
 * @params {integer} props.post.id
 * @params {string} props.post.title
 * @params {string} [props.post.author]
 * @params {string} [props.post.code]
 * @params {string} [props.post.image]
 */
const Post = props => {

  /**
   * @params {string} imageUrl
   */
  const getImage = imageUrl => (
    <img className="post__img" src={imageUrl} />
  );

  /**
   * @params {string} videoCode
   */
  const getVideo = videoCode => (
    <div className="post__embedded-video"
         dangerouslySetInnerHTML={{__html: videoCode}}>
    </div>
  );

  return (
    <div className="post">
      {props.post.type === 'image' && getImage(props.post.image)}
      {props.post.type === 'embedded-video' && getVideo(props.post.code)}
      <div className="post__info">
        <div className="post__title"> {props.post.title} </div>
        <div className="post__creation-info">
          Added by {props.post.author ? props.post.author : 'anonymous'} on {props.post.date}
        </div>
      </div>
    </div>
  );
};

export default Post;
