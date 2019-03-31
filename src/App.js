import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './component/Login/Login'
import SignUp from './component/SignUp/SignUp'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Route path="/" exact={true} component={Index} /> */}
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
      </Router>
    );
  }
}

export default App;