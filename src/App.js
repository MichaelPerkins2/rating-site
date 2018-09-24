import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home.js';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'


class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Home />
          <SignIn />
          <SignUp />

      </div>
    );
  }
}

export default App;
