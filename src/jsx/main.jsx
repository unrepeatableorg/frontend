import React from 'react';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

const Main = (props) => (
  <div className="container-fluid">
    <Navbar />
    {React.cloneElement(props.children, props)}
    <Footer />
  </div>
);

export default Main;
