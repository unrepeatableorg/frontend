import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {

  /**
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.links = [
      { title: 'Home', link: '/' },
      { title: 'Keys', link: '/keys' },
      { title: 'About', link: '/about' }
    ];
  }

  render() {
    let listItems = this.links.map((item) => {
      return (
        <li key={item.title} className="navbar__list-item">
          <Link className="navbar__link" to={item.link}>{item.title}</Link>
        </li>
      );
    });

    return (
      <div className="container-fluid navbar">
        <div className="container">
          <ul>
            {listItems}
          </ul>
        </div>
      </div>
    );
  };
}
