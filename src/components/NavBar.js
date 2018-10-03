
import React, { Component } from 'react';
import '../styling/NavBar.css';
import { Button } from 'react-bootstrap';


class NavBar extends Component {


    render() {
        return (
            <div>
                <header className='header'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <a className='col-xl-1 col-lg-1 col-md-1 col-sm-2 col-xs-2' href='/'><i className='drop-down fas fa-bars'></i></a>
                            <Button className='col-xl-1 col-lg-1 col-md-1 col-sm-2 col-xs-32' bsStyle='link'  href='/'>Title</Button>
                            <a className='col-xl-1 col-lg-1 col-md-1 col-sm-2 col-xs-2' href='/' id=''><i className='search fas fa-search'></i></a>
                            <Button className='login-btn col-xl-1 col-lg-1 col-md-1 col-sm-2 col-xs-2' bsSize='default' bsStyle='primary' href='/login'>Sign In</Button>
                        </div>
                    </div>
                </header>

            </div>
        );
    }
}

export default NavBar;
