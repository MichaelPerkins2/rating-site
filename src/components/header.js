
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
                            <a className='col' href='/'><i className='fas fa-bars'></i></a>
                            <Button className='col' bsStyle='link'  href='/'>Title</Button>
                            <a className='col' href='/' id=''><i className='fas fa-search'></i></a>
                            <Button className='sign-in-b col' bsStyle='primary' href=''>Sign In</Button>
                        </div>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default Header;
