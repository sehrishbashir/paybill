import React, { Component } from "react";
import CanvasJSReact from '../assets/canvasjs.react';
import './ColumnChartGas.css';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export default class ColumnChartGas extends Component {
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
				{ label: "Oct", y: 5000 },
				{ label: "Nov", y: 12000 },
				{ label: "Dec", y: 10000 },

				// { label: "Oct", y: this.props.value1 },
				// { label: "Nov", y: this.props.value2 },
				// { label: "Dec", y: this.props.value3 },
				{ label: "Jan", y: 20000 ,indexLabel: `14000 Gallons 
				
				
				
				
				
				
				
				
				
				Avg / Mon`},


				
				
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