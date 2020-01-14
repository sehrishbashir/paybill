import React, {Component} from 'react';
import {Chart} from 'primereact/chart';




export default class ProgressChart extends Component {
    constructor() {
        super();
        // this._ctx = canvas.getContext("2d") as CanvasRenderingContext2D
    }
    render() {
        var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
        // const data = {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //     datasets: [
        //         {
        //             label: 'My First dataset',
        //             backgroundColor: '#42A5F5',
        //             data: [65, 59, 80, 81, 56, 55, 40]
        //         },
        //         {
        //             label: 'My Second dataset',
        //             backgroundColor: '#9CCC65',
        //             data: [28, 48, 40, 19, 86, 27, 90]
        //         }
        //     ]    
        // };

        

        return (
<canvas id="myChart" width="400" height="400"></canvas>

            // <div>
            //     <div className="content-section introduction">
            //         <div className="feature-intro">
            //             <h1>BarChart</h1>
            //             <p>A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.</p>
            //         </div>
            //     </div>

            //     <div className="content-section implementation">
            //         <h3>Vertical</h3>
            //         <Chart type="bar" data={data} />

            //     </div>
            // </div>
        )
    }
}