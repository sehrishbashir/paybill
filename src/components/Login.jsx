import React from 'react';
// import React, { Component } from 'react'
import './Login.css';
import PropType from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom';



export default function Login() {
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
                    <div className="pb-btn">
                        <input className="fill" type="text" placeholder="Username" />
                        <input className="fill" type="password" placeholder="Password" />

                        <button onClick={e => window.open('/over-view-page', '_self')} className="login">Login</button>
                        {/* <Link to="/over-view-page"><button className="login">Login</button></Link> */}


                        <button className="forget">Forget password ?</button>
                    </div>
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


