import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

// import {
//   Route,
//   BrowserRouter
// } from "react-router-dom";

import ColumnChart from "./ColumnChartGas";


export default class Template extends Component {
  
  render() {    
    return (
		<div>
			  {/* <BrowserRouter>		   */}
					<Row>
						<Col xl={{ span: 7, offset: 3 }} lg={{ span: 8, offset: 3 }} xs={{ span: 8, offset: 2 }}>
							<Container>
								<div className="content" style={{width: "100%", height: "500px"}}>
									{/* <Route exact path="/chart-with-index-label" component={ColumnChart}/> */}
									<ColumnChart/>
								</div>
							</Container>
						</Col>					
					</Row>			
			  {/* </BrowserRouter>	 */}
			</div>
    );
  }
}
