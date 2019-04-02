import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './component/Login/Login'
import SignUp from './component/SignUp/SignUp'
import Home from './component/Home/Home'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/home" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signUp" component={SignUp} />
      </Router>
    );
  }
}

export default App;