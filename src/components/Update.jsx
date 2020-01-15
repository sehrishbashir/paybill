import React from 'react';
import './Update.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faBan, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import {Link, BrowserRouter as Router} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Update() {
    return (
        <Router>
        <div className="Update">
            <div className="update-container">
                <div className="up-content">
                    <Header backIcon={<FontAwesomeIcon icon={faChevronLeft} />} back="back"/>
                    
                    <div className="up-details">
                        <h1>Update details</h1>
                    </div>
                </div>
                <div className="inpt">
                    <div className="inpt-1">
                        <input type="text" placeholder=" John Doe Micheal " /><FontAwesomeIcon className="font-icon" icon={faThumbtack} />
                    </div>
                    <div className="inpt-1">
                        <input type="email" placeholder=" john091_m@gmail.com" /><FontAwesomeIcon className="font-icon" icon={faThumbtack} />
                    </div>
                    <div className="inpt-1">
                        <input type="number" placeholder="045853876" /><FontAwesomeIcon className="font-icon" icon={faThumbtack} />
                    </div>
                    <div className="inpt-1">
                        <input type="password" placeholder="**********" /><FontAwesomeIcon className="font-icon" icon={faThumbtack} />
                    </div>
                    <div className=" inpt-2">
                        <input type="number" placeholder="0155255874" /><FontAwesomeIcon className="font-icon" icon={faBan} />
                    </div>

                    <Link to="/updated"><button className="update">Update</button></Link>
                </div>
                <Footer />
            </div>
        </div>
        </Router>
    )
}
