import React from 'react';
import './Register.css';
import './Hero.css';

export default function Register() {
    return (
        <div className="Register">
            <div className="register-container">
                <div className="pay-bill">
                    <div className="content">
                        <h1>Pay<b>Bill</b></h1>
                        <p>Pay your bill on the go now</p>
                    </div>
                </div>
                <div className="pb-btn inputs">
                    <input className="fill" type="text" placeholder="Full Name" />
                    <input className="fill" type="email" placeholder="Email Address" />
                    <input className="fill" type="number" placeholder="Phone Number" />
                    <input className="fill" type="password" placeholder="Password" />
                    <input className="fill" type="number" placeholder="My PayBill ID" />

                    <button className="forget id"><small>Not sure ? Find your ID by clicking here </small></button>
                    <button className="register">Register</button>
                </div>
            </div>
        </div>
    )
}
