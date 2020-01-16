import React from 'react'
import './ElectricBill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ColumnChartElectric from "./ColumnChartElectric";

import { Link, BrowserRouter as Router } from 'react-router-dom';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';



export default function ElectricBill() {
    return (
        <Router>
            <div className="ElectricBill">
                <div className="electric-container">
                    <div className="up-content">
                        <Header backIcon={<FontAwesomeIcon icon={faChevronLeft} />} back="back"/>
                        <Products icon={<FontAwesomeIcon icon={faLightbulb} />} heading="Electric" value="$499.89"/>
                        
                        <div className="chart-section">
                            <div className="chart-content">
                                <h3>Your Electric Usage</h3>
                                <ColumnChartElectric />
                            </div>
                        </div>
                        <div className="btn-yourbill">

                            <button onClick={e => window.open('/pay-bill', '_self')} className="paybill-btn">Pay your Water Bill</button>
                            {/* <Link to="pay-bill"><button className="paybill-btn">Pay your Water Bill</button></Link> */}
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </Router>

    )
}
