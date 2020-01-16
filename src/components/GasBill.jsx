import React, { Component } from 'react'
import './GasBill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import ColumnChartGas from "./ColumnChartGas";
import './Update.css'


import { Link, BrowserRouter as Router } from 'react-router-dom';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';


export default class GasBill extends Component {

    render() {

        return (
            <Router>
                <div className="Gasbill">
                    <div className="gasbill-container">
                        <div className="up-content">
                            <Header backIcon={<FontAwesomeIcon icon={faChevronLeft} />} back="back"/>
                            <Products icon={<FontAwesomeIcon icon={faClock} />} heading="Gas" value="$299.01" />

                            <div className="chart-section">
                                <div className="chart-content">
                                    <h3>Your Gas Usage</h3>
                                </div>
                                <ColumnChartGas />
                            </div>
                            <div className="btn-yourbill">


                                <button onClick={e => window.open('/pay-bill', '_self')} className="paybill-btn">Pay your Gas Bill</button>
                                {/* <Link to="pay-bill"><button className="paybill-btn">Pay your Gas Bill</button></Link> */}
                            </div>

                            <Footer />
                        </div>
                    </div>
                </div>
            </Router>

        )
    }
}






