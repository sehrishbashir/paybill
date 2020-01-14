import React from 'react'
import './WaterBill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ColumnChartWater from './ColumnChartWater';

export default function WaterBill() {
    return (
        <div className="WaterBill">
            <div className="waterbill-container">
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
                    <div className="wb-details">
                        <h1><span><FontAwesomeIcon icon={faTint} /></span>Water</h1>
                    </div>
                    <div className="wb-content gb-content">
                        <h3>Month of January</h3>
                        <p><small>Due Date 25/january/2020</small></p>
                        <h2>$99.89</h2>
                    </div>
                    <div className="chart-section">
                        <div className="chart-content">
                            <h3>Your Water Usage</h3>
                            <ColumnChartWater />
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
