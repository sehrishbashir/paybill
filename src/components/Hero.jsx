import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons'


export default function Hero() {
    return (
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
                    <button className="login-btn">Login</button>
                    <button className="register">New Customer ? Register</button>
                </div>

            </div>
        </div>
    )
}


