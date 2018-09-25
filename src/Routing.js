import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'


const Routing = () => (

    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    </Router>
)

export default Routing
