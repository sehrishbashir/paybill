import React from 'react'
import './WaterBill.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import ColumnChartWater from './ColumnChartWater';

import { Link, BrowserRouter as Router } from 'react-router-dom';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';


export default function WaterBill() {
    return (
        <Router>
            <div className="WaterBill">
                <div className="waterbill-container">
                    <div className="up-content">
                        
                        <Header backIcon={<FontAwesomeIcon icon={faChevronLeft} />} back="back"/>
                        <Products icon={<FontAwesomeIcon icon={faTint} />} heading="Water" value="$99.89" />

                        <div className="chart-section">
                            <div className="chart-content">
                                <h3>Your Water Usage</h3>
                                <ColumnChartWater />
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
