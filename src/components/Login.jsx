import React from 'react';
// import React, { Component } from 'react'
import './Login.css';
import PropType from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import $ from 'jquery';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'



export default function Login() {



    return (
        <Router>
            <div className="Login">
                <div className="login-container">

                    <section _ngcontent-c14="" appbanneranimate="" className="banner">
                        <div _ngcontent-c14="" className="banner__figure first"
                            style={{ transform: "matrix3d(0.622146, 0.782907, 0, 0, -0.782907, 0.622146, 0, 0, 0, 0, 1, 0, -6.37234, 6.88212, 0, 1)" }}>
                        </div>

                        <div _ngcontent-c14="" className="banner__figure second"
                            style={{ transform: "matrix3d(0.893314, 0.449433, 0, 0, -0.449433, 0.893314, 0, 0, 0, 0, 1, 0, 2.23657, -1.18407, 0, 1)" }}>
                        </div>
                        <div _ngcontent-c14="" className="banner__figure third"
                            style={{ transform: "matrix3d(0.958912, -0.283709, 0, 0, 0.283709, 0.958912, 0, 0, 0, 0, 1, 0, -15.8156, -14.1508, 0, 1)" }}>
                        </div>
                        <div _ngcontent-c14="" className="banner__figure four"
                            style={{ transform: "matrix3d(0.999993, 0.00469867, 0, 0, -0.00469867, 0.999993, 0, 0, 0, 0, 1, 0, -71.2054, 6.71416, 0, 1)" }}>
                        </div>
                        <div _ngcontent-c14="" className="banner__figure five"
                            style={{ transform: "matrix3d(0.918538, 0.395332, 0, 0, -0.395332, 0.918538, 0, 0, 0, 0, 1, 0, -23.9445, -2.63126, 0, 1)" }}>
                        </div>
                        <div _ngcontent-c14="" className="banner__figure six"
                            style={{ transform: "matrix3d(0.672815, 0.73981, 0, 0, -0.73981, 0.672815, 0, 0, 0, 0, 1, 0, -10.7078, -9.11099, 0, 1)" }}>
                        </div>
                        <div _ngcontent-c14="" className="banner__figure seven"
                            style={{ transform: "matrix3d(0.726318, -0.687363, 0, 0, 0.687363, 0.726318, 0, 0, 0, 0, 1, 0, -5.25053, -16.584, 0, 1)" }}>
                        </div>
                        <div _ngcontent-c14="" className="banner__figure eight"
                            style={{ transform: "matrix3d(-0.0467876, 0.998905, 0, 0, -0.998905, -0.0467876, 0, 0, 0, 0, 1, 0, -46.4857, 0.579261, 0, 1)" }}>
                        </div>


                        <div className="signin">
                            <div className="content">
                                <h1 className="animated bounceInDown slower delay-5s">Pay<b>Bill</b></h1>
                                <p className="animated bounceInDown slower delay-4s">Pay your bill on the go now</p>
                            </div>
                            <div className="input-field animated bounceInDown slower delay-3s">
                                <input type="email" id="email" autoComplete="off" />
                                <i className="material-icons"><FontAwesomeIcon icon={faEnvelope} /></i>
                                <label for="email">Email</label>
                            </div>
                            <div className="input-field animated bounceInDown slower delay-3s">
                                <input type="password" id="password" />
                                <i className="material-icons"><FontAwesomeIcon icon={faLock} /></i>
                                <label for="password">Password</label>
                            </div>
                            <a href="" className="forgot-pw animated bounceInDown slower delay-2s">Forgot Password ?</a>
                            <button onClick={e => window.open('/over-view-page', '_self')} className="login animated bounceInDown slower delay-1s">Login</button>

                        </div>
                    </section>


                </div>
            </div>
        </Router>
    )
}



// export default function Login (props){
//         return (
//             <Router>
//                 <div className="Login">
//                     <div className="login-container">
//                         <div className="pay-bill">
//                             <div className="content">
//                                 <h1>Pay<b>Bill</b></h1>
//                                 <p>Pay your bill on the go now</p>
//                             </div>
//                         </div>
//                         <form className="pb-btn">
//                             <input  className="fill" type="text" placeholder="username" /*value={props.user.username} 
//                                     onChange={props.callEditName}*//>
//                             <input className="fill" type="password" placeholder="password"/*value={props.user.password}
//                                     onChange={props.callEditPassword}*//>

//                             <button type="submit" onClick={e => window.open('/over-view-page', '_self')} className="login">Login</button>
//                             {/* <button className="login"><Link to="/over-view-page">Login</Link></button> */}
//                             {/* <input type="submit" value="Login"/> */}

//                             <button className="forget">Forget password ?</button>
//                         </form>
//                     </div>
//                 </div>
//             </Router>
//         )
//         }

        // Login.propTypes = {
        //     callEditName: PropType.func,
        //     callEditPassword: PropType.func,
        //     user: PropType.object
        // }


