
import React, { Component } from 'react';
import '../styling/Header.css';
import { Button } from 'react-bootstrap';


class Header extends Component {



    render() {
        return (
            <div>
                <header className='header'>
                    <div className='container-fluid'>
                        <div>
                        <div className='row'>
                            <a href='/'><i className='drop-down fas fa-bars'></i></a>
                            <Button bsStyle='link'  href='/'>Title</Button>
                            <a href='/' id=''><i className='search fas fa-search'></i></a>
                            <Button className='login-btn' bsSize='default' bsStyle='primary' href='/login'>Sign In</Button>
                        </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header;
