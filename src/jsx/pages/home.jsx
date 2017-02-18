import React from 'react';
import Navbar from '../components/navbar.jsx';

export default class Home extends React.Component {
  render() {
    return (
      <div className="view--home">
        <Navbar />
        This is home page
      </div>
    )
  };
}
