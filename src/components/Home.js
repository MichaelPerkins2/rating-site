

import React, { Component } from 'react';
import '../styling/Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="home container">
                    <section className="featured">
                        <h1>Featured</h1>
                        <div className="featured row">
                            <div className="first col">Video Game</div>
                            <div className="second col">Movie</div>
                            <div className="third col">Video Game</div>
                        </div>
                    </section>
                    <section className="popular">
                        <h1>Popular</h1>
                        <div className="popular row">
                            <div className="first col">Movie</div>
                            <div className="second col">Video Game</div>
                            <div className="third col">Video Game</div>
                            <div className="fourth col">Movie</div>
                        </div>
                    </section>
                    <section className="new">
                        <h1>New Releases</h1>
                        <div className="new row">
                            <div className="first col">Video Game</div>
                            <div className="second col">Movie</div>
                            <div className="third col">Video Game</div>
                            <div className="fourth col">Movie</div>
                        </div>
                    </section>
                    <section className="trailers">
                        <h1>Trailers</h1>
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
