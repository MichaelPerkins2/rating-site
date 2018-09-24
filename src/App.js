import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home.js';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Home />

      </div>
    );
  }
}

export default App;
