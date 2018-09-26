

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
                            <div className="first col"></div>
                            <div className="second col"></div>
                            <div className="third col"></div>
                        </div>
                    </section>
                    <section className="popular container">
                        <h1>Popular</h1>
                        <div className="popular row">
                            <div className="first col"></div>
                            <div className="second col"></div>
                            <div className="third col"></div>
                            <div className="fourth col"></div>
                        </div>
                    </section>
                    <section className="new container">
                        <h1>New Releases</h1>
                        <div className="new row">
                            <div className="first col"></div>
                            <div className="second col"></div>
                            <div className="third col"></div>
                            <div className="fourth col"></div>
                        </div>
                    </section>
                    <section className="trailers container">
                        <h1>Trailers</h1>
                        <div className="trailers">
                            <div className="first col"></div>
                            <div className="second col"></div>
                            <div className="third col"></div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
