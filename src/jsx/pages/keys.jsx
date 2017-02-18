import React from 'react';
import Navbar from '../components/navbar.jsx';

export default class Keys extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          This is keys page
        </div>
      </div>
    )
  };
}
