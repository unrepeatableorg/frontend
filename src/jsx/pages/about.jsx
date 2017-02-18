import React from 'react';
import Navbar from '../components/navbar.jsx';

export default class About extends React.Component {
  render() {
    return (
      <div className="view--about">
        <Navbar />
        This is about page
      </div>
    )
  };
}
