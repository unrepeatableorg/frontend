import React from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const Main = (props) => (
  <div className="container-fluid">
    <Navbar />
    {React.cloneElement(props.children, props)}
    <Footer />
  </div>
);

export default Main;
