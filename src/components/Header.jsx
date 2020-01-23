import React from 'react';
import'./Header.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
    return (
        <Router>
            <div className="Header">
                    <ul>
                        <li className="back nw-p1" onClick={e => window.open('/back', '_self')}>
                            {props.backIcon} {props.back}
                            {/* <Link to="back">{props.backIcon} {props.back}</Link> */}
                        </li>
                        <li className="paybill nw-p extra">PayBill</li>
                        <li className="back nw-p1" onClick={e => window.open('/logout', '_self')}>
                            Logout
                            {/* <Link className="a" to="logout">Logout</Link> */}
                        </li>
                    </ul>
            </div>
        </Router>
    )
}
