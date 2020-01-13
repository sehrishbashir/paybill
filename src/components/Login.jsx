import React from 'react';
import './Login.css';

export default function Login() {
    return (
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
                    <button className="login">Login</button>
                    <button className="forget">Forget password ?</button>
                </div>
            </div>
        </div>
    )
}
