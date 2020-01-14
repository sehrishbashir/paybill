import React from 'react'
import './ElectricBill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ColumnChartElectric from "./ColumnChartElectric";

export default function ElectricBill() {
    return (
        <div className="ElectricBill">
            <div className="electric-container">
                <div className="up-content">
                    <div className="header">
                        <div className="back nw-p1">
                            <p><FontAwesomeIcon icon={faChevronLeft} />  Back</p>
                        </div>
                        <div className="paybill nw-p">
                            <p>PayBill</p>
                        </div>
                        <div className="back nw-p1">
                            <p>Logout</p>
                        </div>
                    </div>
                    <div className="eb-details">
                        <h1><span><FontAwesomeIcon icon={faLightbulb} /></span>Electric</h1>
                    </div>
                    <div className="eb-content gb-content">
                        <h3>Month of January</h3>
                        <p><small>Due Date 29/january/2020</small></p>
                        <h2>$499.89</h2>
                    </div>
                    <div className="chart-section">
                        <div className="chart-content">
                            <h3>Your Electric Usage</h3>
                            <ColumnChartElectric />
                        </div>
                    </div>
                    <div className="btn-yourbill">
                        <button className="paybill-btn">Pay your Water Bill</button>
                    </div>

                    <div className="footer">
                        <div className="copy-right">
                            <p><span>Pay</span><b>Bill  -</b> 2016 Copyright All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
