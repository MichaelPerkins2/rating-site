

import React, { Component } from 'react';
import '../styling/SignIn.css';


class SignIn extends Component {
    render() {
        return (
            <div>
                <div className="sign-in container">
                    <h1>Sign In</h1>
                    <p>Username</p>
                    <p>Password</p>
                    <p>Enter Button</p>
                    <p>Don't have an account? Sign up here</p>
                </div>

            </div>
        );
    }
}

export default SignIn;
