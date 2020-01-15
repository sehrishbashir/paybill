import React from 'react';
// import './ElectricBill.css'
import'./Header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
    return (
        <Router>
            <div className="Header">
                {/* <header className="header"> */}
                    <ul>
                        <li className="back nw-p1">
                            <Link to="back">{props.backIcon} {props.back}</Link>
                        </li>
                        <li className="paybill nw-p">PayBill</li>
                        <li className="back nw-p1">
                            <Link className="a" to="logout">Logout</Link>
                        </li>
                    </ul>
                {/* </header> */}
            </div>
        </Router>
    )
}
