import React from 'react';
import Navbar from '../components/navbar.jsx';

export default class About extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          This is about page
        </div>
      </div>
    )
  };
}
