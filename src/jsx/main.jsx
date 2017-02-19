import React from 'react';
import Navbar from './components/navbar.jsx';

export default class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  };
}
