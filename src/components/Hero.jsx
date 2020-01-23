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
            <div className="pay-bill ">
              <div className="icons animated fadeInUp slow delay-1s">
                <div className="drop"><FontAwesomeIcon icon={faTint} /></div>
                <div className="bulb"><FontAwesomeIcon icon={faLightbulb} /></div>
                <div className="clock"><FontAwesomeIcon icon={faClock} /></div>
              </div>
              <div className="content">
                <h1 className="animated fadeInUp slow delay-2s">Pay<b>Bill</b></h1>
                <p className="animated fadeInUp slow delay-3s">Pay your bill on the go now</p>
              </div>
            </div>
            <div className="pb-btn">
              {/* <Link to="/login"><button className="login-btn">Login</button></Link> 
                        <Link to="/register"><button className="register">New Customer ? Register</button></Link> */}

              <button onClick={e => window.open('/login', '_self')} className="login-btn animated fadeInUp slow delay-4s">Login</button>
              <button onClick={e => window.open('/register', '_self')} className="register animated fadeInUp slow delay-5s">New Customer <span className="mark">?</span> Register</button>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}



