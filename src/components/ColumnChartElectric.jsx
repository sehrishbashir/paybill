import React, { Component } from "react";
import CanvasJSReact from '../assets/canvasjs.react';
import './ColumnChartGas.css';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default class ColumnChartElectric extends Component {
	constructor(props) {
		super(props);
	}
  render() {
	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "dark2", //"light1", "dark1", "dark2"
		// title:{
		// 	text: "Gas usage"
		// },
		data: [{
			type: "column", //change type to bar, line, area, pie, etc
			//indexLabel: "{y}", //Shows y value on all Data Points
			indexLabelFontColor: "#ffffff",
			indexLabelPlacement: "outside",
			dataPoints: [
				{ label: "Oct", y: 16000 },
				{ label: "Nov", y: 20000 },
				{ label: "Dec", y: 10000 },
				{ label: "Jan", y: 15000 , indexLabel: `14000 KW 
				
				
				
				
				
				
				
				
				
				Avg / Mon`}


				
				
			]
		}]
	}
	
	return (
		<div className="ChartWithIndexLabel">
			<CanvasJSChart options = {options} />
		</div>
	);
  }
};