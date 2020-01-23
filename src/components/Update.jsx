import React from 'react';
import './Update.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faBan, faChevronLeft, faEnvelope, faLock, faUser, faPhoneAlt, faIdBadge, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Update() {
    return (
        <Router>
            <div className="Update">
                <div className="update-container">
                    <div className="up-content">
                        <Header backIcon={<FontAwesomeIcon icon={faChevronLeft} />} back="back" />

                        <div className="up-details">
                            <h1>Update details</h1>
                        </div>
                    </div>

                    <div className="signin">
                        <div className="input-field animated bounceInDown slower delay-3s">
                            <input type="fullname" id="fullname" />
                            <i className="material-icons"><FontAwesomeIcon icon={faUser} /></i>
                            <label for="fullname">Fullname<FontAwesomeIcon className="pencil" icon={faPencilAlt} /></label>
                        </div>
                        <div className="input-field animated bounceInDown slower delay-3s">
                            <input type="email" id="email" autoComplete="off" />
                            <i className="material-icons"><FontAwesomeIcon icon={faEnvelope} /></i>
                            <label for="email">Email<FontAwesomeIcon className="pencil" icon={faPencilAlt} /></label>
                        </div>
                        <div className="input-field animated bounceInDown slower delay-3s">
                            <input type="phone" id="phone" />
                            <i className="material-icons"><FontAwesomeIcon icon={faPhoneAlt} /></i>
                            <label for="phone">Phone<FontAwesomeIcon className="pencil" icon={faPencilAlt} /></label>
                        </div>
                        <div className="input-field animated bounceInDown slower delay-3s">
                            <input type="password" id="password" />
                            <i className="material-icons"><FontAwesomeIcon icon={faLock} /></i>
                            <label for="password">Password<FontAwesomeIcon className="pencil" icon={faPencilAlt} /></label>
                        </div>
                        <div className="input-field animated bounceInDown slower delay-3s">
                            <input type="id" id="id" />
                            <i className="material-icons"><FontAwesomeIcon icon={faIdBadge} /></i>
                            <label for="id">My Paybill Id<FontAwesomeIcon className="pencil" icon={faPencilAlt} /></label>
                        </div>
                        <button onClick={e => window.open('/over-view-page', '_self')} className="register login animated bounceInDown slower delay-1s">Update</button>
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    )
}
