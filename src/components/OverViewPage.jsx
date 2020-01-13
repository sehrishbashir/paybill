import React from 'react'
import './OverViewPage.css';

export default function OverViewPage() {
    return (
        <div className="OverViewPage">
            <div className="ovp-container">
                <div className="header">
                    <div className="back">
                        <p></p>
                    </div>
                    <div className="paybill ovp-paybill">
                        <p>PayBill</p>
                    </div>
                    <div className="back">
                        <p>Logout</p>
                    </div>
                </div>
                <div className="owner-details">
                    <div className="own-img"></div>
                    <div className="own-content">
                        <h1>Thomas Cruise  </h1>
                        <h5>105 Seasame Street, Melbourne VIC</h5>
                        <p>PayBill ID : 256963356</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
