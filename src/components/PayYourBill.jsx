import React from 'react';
import './PayYourBill.css';
import mastercard from '../assets/mastercard.jpg';
import visacard from '../assets/visacard.png';
import americacard from '../assets/americacard.png';
import discovercard from '../assets/discovercard.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faEnvelope, faLock, faUser, faPhoneAlt, faIdBadge} from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import { Link, BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import CustomRouter from '../CustomRouter';



export default function PayYourBill() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return (
        <Router>
            <div className="PayYourBill">
                <div className="pyb-container">
                    {/* <CustomRouter /> */}
                    <div className="up-content">
                        <Header backIcon={<FontAwesomeIcon icon={faChevronLeft} />} back="back" />
                        <div className="up-details">
                            <h1>Pay your bill</h1>
                        </div>
                    </div>
                    <div className="pyb-content">
                        <p><b>You are paying your water bill for the month of january 2020</b></p>
                        <h3>Total amount due</h3>
                        <span>$99.01</span>
                    </div>
                    <hr />
                    <div className="cards">
                        <div className="card-img"><img src={mastercard} /></div>
                        <div className="card-img"><img src={visacard} /></div>
                        <div className="card-img"><img src={americacard} /></div>
                        <div className="card-img"><img src={discovercard} /></div>
                    </div>

                    <div className="signin">
                        <div className="input-field">
                            <input type="fullname" id="fullname" />
                            <i className="material-icons"><FontAwesomeIcon icon={faUser} /></i>
                            <label for="fullname">Fullname</label>
                        </div>
                        <div className="input-field">
                            <input type="email" id="email" autoComplete="off" />
                            <i className="material-icons"><FontAwesomeIcon icon={faEnvelope} /></i>
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input type="phone" id="phone" />
                            <i className="material-icons"><FontAwesomeIcon icon={faPhoneAlt} /></i>
                            <label for="phone">Phone</label>
                        </div>
                        <div className="input-field">
                            <input type="password" id="password" />
                            <i className="material-icons"><FontAwesomeIcon icon={faLock} /></i>
                            <label for="password">Password</label>
                        </div>
                        <div className="input-field">
                            <input type="id" id="id" />
                            <i className="material-icons"><FontAwesomeIcon icon={faIdBadge} /></i>
                            <label for="id">My Paybill Id</label>
                        </div>
                        <button onClick={e => window.open('/over-view-page', '_self')} className="register login animated fadeInUp slower delay-1s">Pay Now</button>
                    </div>
                    {/* <div className="bill-input">
                        <div className="bl-inpt-1">
                            <span>Name</span> <input type="text" placeholder="( as it appears on card ) " />
                        </div>
                        <div className="bl-inpt-1">
                            <span>Card number</span> <input type="text" placeholder="( no dashes or spaces ) " />
                        </div>
                        <div className="bl-inpt-1">
                            <span>Expiration date</span>
                            <DatePicker onChange={onChange} />
                        </div>
                        <div className="demo-cards-div">
                            <div className="bl-inpt-1 ">
                                <span>CCV</span> <input type="text" placeholder=" ( security code )" size="16" />
                            </div>

                            <div className="section">
                                <div className="card1"></div>
                                <div className="card2"></div>
                            </div>
                        </div>
                        <button className="pay-now">Pay Now</button>
                    </div> */}
                    <Footer />
                </div>
            </div>
        </Router>
    )

}






