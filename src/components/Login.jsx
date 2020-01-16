// import React from 'react';
import React, { Component } from 'react'
import './Login.css';

import { BrowserRouter as Router, Link } from 'react-router-dom';



// export default function Login() {
//     return (
//         <Router>
//             <div className="Login">
//                 <div className="login-container">
//                     <div className="pay-bill">
//                         <div className="content">
//                             <h1>Pay<b>Bill</b></h1>
//                             <p>Pay your bill on the go now</p>
//                         </div>
//                     </div>
//                     <div className="pb-btn">
//                         <input className="fill" type="text" placeholder="Username" />
//                         <input className="fill" type="password" placeholder="Password" />

//                         <button onClick={e => window.open('/over-view-page', '_self')} className="login">Login</button>
//                         {/* <Link to="/over-view-page"><button className="login">Login</button></Link> */}


//                         <button className="forget">Forget password ?</button>
//                     </div>
//                 </div>
//             </div>
//         </Router>
//     )
// }



export default class Login extends Component {
    constructor(props) {
        super(props);}

    render() {
        return (
            <Router>
                <div className="Login">
                    <div className="login-container">
                        <div className="pay-bill">
                            <div className="content">
                                <h1>Pay<b>Bill</b></h1>
                                <p>Pay your bill on the go now</p>
                            </div>
                        </div>
                        <form className="pb-btn">
                            <input  className="fill" type="text" value={this.state.username} 
                                    onChange = {this.handlename}/>
                            <input className="fill" type="password" value={this.state.password}
                                    onChange = {this.handlepassword} />

                            <button type="submit" onClick={e => window.open('/over-view-page', '_self')} className="login">Login</button>
                            {/* <button className="login"><Link to="/over-view-page">Login</Link></button> */}
                            {/* <input type="submit" value="Login"/> */}

                            <button className="forget">Forget password ?</button>
                        </form>
                    </div>
                </div>
            </Router>
        )
        }
}

