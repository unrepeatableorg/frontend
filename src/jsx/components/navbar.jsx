import React from 'react';
import { Link } from 'react-router';

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/keys">Keys</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    )
  };
}
