// External dependencies
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Internal dependencies
import * as actionCreators from './actions/actionCreators.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

/**
 * @param {Object} props
 *
 * @returns {ReactElement}
 */
const Root = props => (
  <div className="container-fluid">
    <Navbar />
    {React.cloneElement(props.children, props)}
    <Footer />
  </div>
);

// Include state and actionCreators in the Main component
const Main = connect(
  state => ({ posts: state.posts }),
  dispatch => { return bindActionCreators(actionCreators, dispatch); }
)(Root);

export default Main;
