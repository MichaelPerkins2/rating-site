

import React, { Component } from 'react';
import '../styling/Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="home container">
                    <section className="featured container">
                        <h1>Featured</h1>
                        <div className="featured row">
                            <div className="first col">
                                <div className='item-title'>
                                    <p>Battlefield V</p>
                                </div>
                            </div>
                            <div className="second col">
                                <div className='item-title'>
                                    <p>Halloween</p>
                                </div>
                            </div>
                            <div className="third col">
                                <div className='item-title'>
                                    <p>Call of Duty: Black Ops IV</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="popular container">
                        <h1>Popular</h1>
                        <div className="popular row">
                            <div className="first col">
                                <div className='item-title'>
                                    <p>Black Panther</p>
                                </div>
                            </div>
                            <div className="second col"><div className='item-title'>
                                <p>PlayerUnknown's Battlegrounds</p>
                            </div></div>
                            <div className="third col">
                                <div className='item-title'>
                                    <p>Fortnite Battle Royale</p>
                                </div>
                            </div>
                            <div className="fourth col">
                                <div className='item-title'>
                                    <p>Deadpool 2</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="new container">
                        <h1>New Releases</h1>
                        <div className="new row">
                            <div className="first col">
                                <div className='item-title'>
                                    <p>Fallout 76</p>
                                </div>
                            </div>
                            <div className="second col">
                                <div className='item-title'>
                                    <p>The Nun</p>
                                </div>
                            </div>
                            <div className="third col">
                                <div className='item-title'>
                                    <p>NBA 2K19</p>
                                </div>
                            </div>
                            <div className="fourth col">
                                <div className='item-title'>
                                    <p>Venom</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="trailers container">
                        <h1>Trailers</h1>
                        <div className="trailers">
                            <div className="first col">
                                <div className='item-title'>
                                    <p>Christopher Robin</p>
                                </div>
                            </div>
                            <div className="second col">
                                <div className='item-title'>
                                    <p>Red Dead Redemption</p>
                                </div>
                            </div>
                            <div className="third col">
                                <div className='item-title'>
                                    <p>Battlefield V</p>
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
