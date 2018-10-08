

import React, { Component } from 'react';
import '../styling/Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="home container-fluid">
                    <section className="featured container">
                        <h1>Featured</h1>
                        <div className="featured row">
                            <div className="first col-xl col-lg col-md-12 col-sm-12 col-12">
                                <div className='feat-item-title'>
                                    <p className='feat-title'>Battlefield V</p>
                                </div>
                            </div>
                            <div className="second col-xl col-lg col-md-12 col-sm-12 col-12">
                                <div className='feat-item-title'>
                                    <p className='feat-title'>Halloween</p>
                                </div>
                            </div>
                            <div className="third col-xl col-lg col-md-12 col-sm-12 col-12">
                                <div className='feat-item-title'>
                                    <p className='feat-title'>Call of Duty: Black Ops 4</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="popular container">
                        <h1>Popular</h1>
                        <div className="popular row">
                            <div className="first col-xl col-lg col-md-12 col-sm-12 col-12">
                                <div className='pop-item-title'>
                                    <p className='pop-title'>Black Panther</p>
                                </div>
                            </div>
                            <div className="second col-xl col-lg col-md-12 col-sm-12 col-12">
                                <div className='pop-item-title'>
                                    <p className='pop-title'>PlayerUnknown's Battlegrounds</p>
                                </div>
                            </div>
                            <div className="third col-xl col-lg col-md-12 col-sm-12 col-12">
                                <div className='pop-item-title'>
                                    <p className='pop-title'>Fortnite Battle Royale</p>
                                </div>
                            </div>
                            <div className="fourth col">
                                <div className='pop-item-title'>
                                    <p className='pop-title'>Deadpool 2</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="new container">
                        <h1>New Releases</h1>
                        <div className="new row">
                            <div className="first col">
                                <div className='new-item-title'>
                                    <p className='new-title'>Fallout 76</p>
                                </div>
                            </div>
                            <div className="second col">
                                <div className='new-item-title'>
                                    <p className='new-title'>The Nun</p>
                                </div>
                            </div>
                            <div className="third col">
                                <div className='new-item-title'>
                                    <p className='new-title'>NBA 2K19</p>
                                </div>
                            </div>
                            <div className="fourth col">
                                <div className='new-item-title'>
                                    <p className='new-title'>Venom</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="trailers container">
                        <h1>Trailers</h1>
                        <div className="trailers">
                            <div className="first col">
                                <div className='trail-item-title'>
                                    <p className='trail-title'>Christopher Robin</p>
                                </div>
                            </div>
                            <div className="second col">
                                <div className='trail-item-title'>
                                    <p className='trail-title'>Red Dead Redemption 2</p>
                                </div>
                            </div>
                            <div className="third col">
                                <div className='trail-item-title'>
                                    <p className='trail-title'>Battlefield V</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
