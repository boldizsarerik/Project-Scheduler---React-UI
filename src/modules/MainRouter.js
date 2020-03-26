import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import HomePage from '../pages/HomePage';

export default class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  appWithPersistent = () => (props) => (
    <App
      {...props}
    />
  )

  render() {
    return (
      <Router history={browserHistory}>
        <Route component={this.appWithPersistent()}>
          <Route path="/" component={HomePage} />
        </Route>
      </Router>
    );
  }
}