import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons'

import Login from './Login';
import Register from './Register';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Hero() {
    return (
        <Router>
            <div>
                <div className="Hero">
                    <div className="hero-container">
                        <div className="pay-bill">
                            <div className="icons">
                                <div className="drop"><FontAwesomeIcon icon={faTint} /></div>
                                <div className="bulb"><FontAwesomeIcon icon={faLightbulb} /></div>
                                <div className="clock"><FontAwesomeIcon icon={faClock} /></div>
                            </div>
                            <div className="content">
                                <h1>Pay<b>Bill</b></h1>
                                <p>Pay your bill on the go now</p>
                            </div>
                        </div>
                        <div className="pb-btn">
                            <button className="login-btn"><Link to="/login">Login</Link></button>
                            <button className="register"><Link to="/register">New Customer ? Register</Link></button>
                        </div>

                    </div>
                </div>

                <Switch>
                {/* <Route path="/" component={Hero} /> */}

                    <Route path="/login"><Login /></Route>
                    <Route path="/register"><Register /></Route>
                </Switch>
            </div>
        </Router>




    )
}


