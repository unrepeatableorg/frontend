// External dependencies
import React from 'react';
import { Link, IndexLink } from 'react-router';

/**
 * @returns {ReactElement}
 */
const Navbar = () => {
  const linkTypes = [ IndexLink, Link ];

  const links = [
    { title: 'Home', link: '/', type: 0 },
    { title: 'Keys', link: '/keys', type: 1 },
    { title: 'About', link: '/about', type: 1 }
  ];

  const listItems = links.map(item => {
    const Element = linkTypes[item.type];
    return (
      <li key={item.title} className="navbar__list-item">
        <Element className="navbar__link"
                 activeClassName="navbar__link--active"
                 to={item.link}>
          {item.title}
        </Element>
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

export default Navbar;
