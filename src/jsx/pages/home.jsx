import React from 'react';
import Navbar from '../components/navbar.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="container">
          This is home page
        </div>
      </div>
    )
  };
}
