import React from 'react'
import './Products.css';

export default function Products(props) {
    // let style = {
    //     backgroundColor = props.backgroundColor,
    //     color = props.color
    // }
    return (
        <div className="Products">
            <div className="pro-details">
                <h1><span>{props.icon}</span>{props.heading}</h1>
            </div>
            <div className="pro-content">
                <h3>Month of January</h3>
                <p><small>Due Date 29/january/2020</small></p>
                <h2>{props.value}</h2>
            </div>

        </div>
    )
}

