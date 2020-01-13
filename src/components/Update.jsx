import React from 'react';
import './Update.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faBan, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default function Update() {
    return (
        <div className="Update">
            <div className="update-container">
                <div className="up-content">
                <div className="header">
                    <div className="back">
                        <p><FontAwesomeIcon icon={faChevronLeft} />  Back</p>
                    </div>
                    <div className="paybill">
                        <p>PayBill</p>
                    </div>
                    <div className="back">
                        <p>Logout</p>
                    </div>
                </div>
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
                
                    <button className="update">Update</button>
                </div>
                <div className="footer">
                <div className="copy-right">
                        <p><span>Pay</span><b>Bill  -</b> 2016 Copyright All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
