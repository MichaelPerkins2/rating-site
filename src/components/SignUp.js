

import React, { Component } from 'react';
import '../styling/SignUp.css';



class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirm: ''
}

    render() {
        return (
            <div className="sign-up container">
                <h1>Sign Up</h1>
                <form>
                    <input type='text' placeholder='First Name' value={this.state.firstName} onChange={ e => this.setState({ firstName: e.target.value })} /><br/>
                    <input type='text' placeholder='Last Name' value={this.state.lastName} onChange={ e => this.setState({ lastName: e.target.value })} /><br/>
                    <input type='email' placeholder='Email' value={this.state.email} onChange={ e => this.setState({ email: e.target.value })}/><br/>
                    <input type='text' placeholder='Username' value={this.state.username} onChange={ e => this.setState({ username: e.target.value })} /><br/>
                    <input type='password' placeholder='Password' value={this.state.password} onChange={ e => this.setState({ password: e.target.value })} /><br/>
                    <input type='password' placeholder='Confirm Password' value={this.state.confirm} onChange={ e => this.setState({ confirm: e.target.value })} /><br/>
                </form>
                <button onClick={ e => this.onSubmit(e)}>Submit</button>
                <p>Already have an account? Sign in <a href="/login">here</a></p>
            </div>
        );
    }
}

export default SignUp;
