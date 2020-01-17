// import React from 'react';
// import './Hero.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTint, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons'


// import {Link, BrowserRouter as Router} from 'react-router-dom';


// export default function Hero() {
//     return (
//       <Router>
//                 <div className="Hero">
//                     <div className="hero-container">
//                         <div className="pay-bill">
//                             <div className="icons">
//                                 <div className="drop"><FontAwesomeIcon icon={faTint} /></div>
//                                 <div className="bulb"><FontAwesomeIcon icon={faLightbulb} /></div>
//                                 <div className="clock"><FontAwesomeIcon icon={faClock} /></div>
//                             </div>
//                             <div className="content">
//                                 <h1>Pay<b>Bill</b></h1>
//                                 <p>Pay your bill on the go now</p>
//                             </div>
//                         </div>
//                         <div className="pb-btn">
//                         <Link to="/login"><button className="login-btn">Login</button></Link>
//                         <Link to="/register"><button className="register">New Customer ? Register</button></Link>
//                         </div>

//                     </div>
//                 </div>


//                 </Router>



//     )
// }
import React, { Component } from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Login';

export default class Hero extends Component {



  render() {
    return (
      <Router>
        <div className="HeroStyle">
          <div className="hero-container">
            <div className="hero-box">
              <span className="hero-span"></span>
              <span className="hero-span"></span>
              <span className="hero-span"></span>
              <span className="hero-span"></span>
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
                {/* <Link to="/login"><button className="login-btn">Login</button></Link> 
                        <Link to="/register"><button className="register">New Customer ? Register</button></Link> */}

                <button onClick={e => window.open('/login', '_self')} className="login-btn">
                  <span className="log-span"></span>
                  <span className="log-span"></span>
                  <span className="log-span"></span>
                  <span className="log-span"></span>
                  Login</button>
                <button onClick={e => window.open('/register', '_self')} className="register">
                  <span className="reg-span"></span>
                  <span className="reg-span"></span>
                  <span className="reg-span"></span>
                  <span className="reg-span"></span>
                  New Customer ? Register</button>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}



