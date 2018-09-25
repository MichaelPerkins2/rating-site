

import React, { Component } from 'react';
import '../styling/LogIn.css';


class LogIn extends Component {

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
            <div>
                <div className="log-in container">
                    <h1>Sign In</h1>
                    <form>
                        <input type='text' placeholder='Email or Username' value={this.state.username} onChange={ e => this.setState({ username: e.target.value })} /><br/>
                        <input type='password' placeholder='Password' value={this.state.password} onChange={ e => this.setState({ password: e.target.value })} /><br/>
                    </form>
                    <button onClick={ e => this.onSubmit(e)}>Submit</button>
                    <p>Don't have an account? Sign up <a href="/signup">here</a></p>
                </div>

            </div>
        );
    }
}

export default LogIn;
