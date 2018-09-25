import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home.js';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Routing from './Routing';


class App extends Component {



  render() {
    return (
      <div>
          <Header />
          {/*<Home />*/}
          {/*<LogIn />*/}
          {/*<SignUp />*/}
          <Routing />
      </div>
    );
  }
}

export default App;
