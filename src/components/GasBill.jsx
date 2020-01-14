import React, { Component } from 'react'
import './GasBill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ColumnChartGas from "./ColumnChartGas";
import './Update.css'


export default class GasBill extends Component {
   
    render() {
       
        return (
            <div className="Gasbill">
                <div className="gasbill-container">
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
                        <div className="gb-details">
                            <h1><span><FontAwesomeIcon icon={faClock} /></span>Gas</h1>
                        </div>
                        <div className="eb-content gb-content">
                            <h3>Month of January</h3>
                            <p><small>Due Date 25/january/2020</small></p>
                            <h2>$299.01</h2>
                        </div>
                        <div className="chart-section">
                            <div className="chart-content">
                                <h3>Your Gas Usage</h3>
                            </div>
                            <ColumnChartGas />
                        </div>
                        <div className="btn-yourbill">
                            <button className="paybill-btn">Pay your Gas Bill</button>
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
}






