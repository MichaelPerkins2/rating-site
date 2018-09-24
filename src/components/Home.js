

import React, { Component } from 'react';
import '../styling/Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <section className="featured">Featured
                        <div className="featured row">
                            <div className="first col">Video Game</div>
                            <div className="second col">Movie</div>
                            <div className="third col">Video Game</div>
                        </div>
                    </section>
                    <section className="popular">Popular
                        <div className="popular row">
                            <div className="first col">Movie</div>
                            <div className="second col">Video Game</div>
                            <div className="third col">Video Game</div>
                            <div className="fourth col">Movie</div>
                        </div>
                    </section>
                    <section className="new">New Releases
                        <div className="new row">
                            <div className="first col">Video Game</div>
                            <div className="second col">Movie</div>
                            <div className="third col">Video Game</div>
                            <div className="fourth col">Movie</div>
                        </div>
                    </section>
                    <section className="trailers">Trailers
                        <div className="trailers">
                            <div className="first col">Movie</div>
                            <div className="second col">Video Game</div>
                            <div className="third col">Video Game</div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
