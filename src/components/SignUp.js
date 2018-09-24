

import React, { Component } from 'react';
import '../styling/SignUp.css';


class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="sign-in container">
                    <h1>Sign Up</h1>
                    <p>First Name</p>
                    <p>Last Name</p>
                    <p>Email</p>
                    <p>Password</p>
                    <p>Enter Button</p>
                    <p>Already have an account? Sign in here</p>
                </div>

            </div>
        );
    }
}

export default SignUp;
