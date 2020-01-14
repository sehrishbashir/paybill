import React from 'react'
import './OverViewPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faLightbulb, faClock, faAngleRight, faUser, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

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
                        <h1>Aliana Methadon</h1>
                        <h5>105 Seasame Street, Melbourne VIC</h5>
                        <p>PayBill ID : 256963356</p>
                    </div>
                </div>

                <div className="ovp-items">
                    <div className="ovp-item register">

                        <div className="icons">
                            <div className="drop"><FontAwesomeIcon icon={faTint} /></div>
                            <div className="ovp-item-content"><p>Water</p></div>
                        </div>

                        <div className="bill">
                            <div className="bill-cash">
                                <p className="bill-p"><b>Bill</b></p>
                                <span><p>January</p></span>
                                <span><p className="value">$198.9 </p></span>
                            </div>
                            <div className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div>
                        </div>

                    </div>
                    <div className="ovp-item pay-now">

                        <div className="icons">
                            <div className="bulb"><FontAwesomeIcon icon={faLightbulb} /></div>
                            <div className="ovp-item-content"><p>Electric</p></div>
                        </div>

                        <div className="bill">
                            <div className="bill-cash">
                                <p className="bill-p"><b>Bill</b></p>
                                <span><p>January</p></span>
                                <span><p className="value">$498.9 </p></span>
                            </div>
                            <div className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div>
                        </div>

                    </div>
                    <div className="ovp-item login">

                        <div className="icons">
                            <div className="clock"><FontAwesomeIcon icon={faClock} /></div>
                            <div className="ovp-item-content"><p>Gas</p></div>
                        </div>

                        <div className="bill">
                            <div className="bill-cash">
                                <p className="bill-p"><b>Bill</b></p>
                                <span><p>January</p></span>
                                <span><p className="value">$498.9 </p></span>
                            </div>
                            <div className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div>
                        </div>

                    </div>

                    <div className="ovp-contact">
                        <div className="ovp-item">

                            <div className="icons new-icons">
                                <div className="user"><FontAwesomeIcon icon={faUser} /></div>
                                <div className="ovp-item-contents"><p>Update our profile details</p></div>
                            </div>

                            <div className="bill new-bill">
                                <div className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div>
                            </div>

                        </div>
                        <div className="ovp-item">

                            <div className="icons new-icons">
                                <div className="call"><FontAwesomeIcon icon={faCommentAlt} /></div>
                                <div className="ovp-item-contents"><p>Call our 24/7 customer care line</p></div>
                            </div>

                            <div className="bill new-bill">
                                <div className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div>
                            </div>

                        </div>
                    </div>
                
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
