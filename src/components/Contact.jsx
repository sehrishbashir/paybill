import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faPencilAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'

export default function Contact() {
    return (
        <div className="Contact">
            <div className="contact-container">
                <Header backIcon={<FontAwesomeIcon icon={faChevronLeft} />} back="back" />
                <div className="up-details">
                    <h1>Contact Us</h1>
                </div>
                <div className="signin">
                    <div className="input-field animated bounceInDown slower delay-3s">
                        <input type="fullname" id="fullname" />
                        <i className="material-icons"><FontAwesomeIcon icon={faUser} /></i>
                        <label for="fullname">Fullname</label>
                    </div>
                    <div className="input-field animated bounceInDown slower delay-3s">
                        <input type="email" id="email" autoComplete="off" />
                        <i className="material-icons"><FontAwesomeIcon icon={faEnvelope} /></i>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-field txtre animated bounceInDown slower delay-3s">
                        <label className="mess" for="message">Message</label>
                        <textarea name="message" rows="3" cols="38" />
                        <i className="material-icons"><FontAwesomeIcon icon={faPencilAlt} /></i>

                    </div>

                    <button data-toggle="modal" data-target="#exampleModal" className="register login animated bounceInDown slower delay-1s">Send</button>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <h1>Thank you for Cotacting</h1>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={e => window.open('/over-view-page', '_self')}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
