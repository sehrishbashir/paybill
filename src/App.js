import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import Update from './components/Update';
import PayYourBill from './components/PayYourBill';
import OverViewPage from './components/OverViewPage';
import WaterBill from './components/WaterBill';
import ElectricBill from './components/ElectricBill';
import GasBill from './components/GasBill';
import ProgressChart from './components/ProgressChart';
import ColumnChart from './components/ColumnChartGas';
import Template from './components/Template';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomRouter from './CustomRouter';

export default function App() {
  return (
    <div className="App">
      {/* <Router>
        <div>
          <Route path="/" component={Hero} />
        </div>
      </Router> */}
      {/* <Hero /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Update /> */}
      {/* <PayYourBill /> */}
      {/* <OverViewPage /> */}
      <WaterBill />
      {/* <ElectricBill /> */}
      {/* <GasBill /> */}


      {/* <ProgressChart /> */}
      {/* <Template /> */}
      {/* <ColumnChart /> */}
      {/* <CustomRouter /> */}
    </div>
  );
}
