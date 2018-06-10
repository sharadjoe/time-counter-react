import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'

class App extends Component {
  render() {
    return(
      <div class="ui container">
        <Route 
          path="/"
          exact component={ HomePage }
        />
        <Route 
          path="/login"
          exact component={ LoginPage }
        />
        <Route 
          path="/signup"
          exact component={ SignupPage }
        />
      </div>
    );
  }
}

export default App;
