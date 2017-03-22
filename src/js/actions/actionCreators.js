/**
 * @param {string} title
 * @param {string} type ('image' | 'embedded-video' | 'text')
 * @param {string} media
 * @param {string} [author]
 *
 * @returns {Object}
 */
export function createPost(title, type, media, author) {
  return {
    id: Date.now(),
    type: 'CREATE_POST',
    date: (new Date()).toISOString().slice(0, 10),
    title,
    author,
    media
  };
}
