import React from 'react';
import Navbar from './components/navbar.jsx';

const Main = (props) => (
  <div className="container-fluid">
    <Navbar />
    {React.cloneElement(props.children, props)}
  </div>
);

export default Main;
