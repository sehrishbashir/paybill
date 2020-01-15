import React from 'react';
import './PayYourBill.css';
import mastercard from '../assets/mastercard.jpg';
import visacard from '../assets/visacard.png';
import americacard from '../assets/americacard.png';
import discovercard from '../assets/discovercard.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import { Link, BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';



export default function PayYourBill() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return (
        <Router>
            <div className="PayYourBill">
                <div className="pyb-container">
                    <div className="up-content">
                        <Header backIcon={<FontAwesomeIcon icon={faChevronLeft} />} back="back"/>
                        
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
                    <div className="bill-input">
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
                    </div>
                    <Footer />
                </div>
            </div>
        </Router>
    )

}






