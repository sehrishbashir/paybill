import React, { Component } from 'react'
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


// import './components/Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faLightbulb, faClock } from '@fortawesome/free-solid-svg-icons'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CustomRouter from './CustomRouter';
// import { MyIndex } from './components/form/MyIndex';



export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loginData: [
        {
          username: "username",
          password: "************"
        }
      ],
      registerData: [

      ]
    }
  }

  handlename = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  handlepassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (

      <div>
        {/* <MyIndex /> */}

        {/* {
          this.state.userData.map(user => {
            return <Login user={user}
              callEditName={(user) => this.handlename}
              callEditPassword={(user) => this.handlepassword} />
          })
        } */}



        <Router>
          <Switch>
            <Route path="/" exact component={Hero} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/over-view-page" component={OverViewPage} />
            <Route path="/pay-electric-bill" component={PayYourBill} />
            <Route path="/back" component={OverViewPage} />
            <Route path="/water-bill" component={WaterBill} />
            <Route path="/electric-bill" component={ElectricBill} />
            <Route path="/gas-bill" component={GasBill} />
            <Route path="/update" component={Update} />
            <Route path="/logout" component={Hero} />
            <Route path="/updated" component={OverViewPage} />
            <Route path="/pay-bill" component={PayYourBill} />
          </Switch>
        </Router>






        {/* <Hero /> */}
        {/* <Login /> */}
        {/* <Register />
      <Update /> */}
        {/* <PayYourBill /> */}
        {/* <OverViewPage />
      <WaterBill />
      <ElectricBill />
      <GasBill /> */}



      </div>
    )
  }
}


// class Hero extends Component {
//   render() {
//     return (
//       <Router>
//       <div className="HeroStyle">
//         <div className="hero-container">
//           <div className="pay-bill">
//             <div className="icons">
//               <div className="drop"><FontAwesomeIcon icon={faTint} /></div>
//               <div className="bulb"><FontAwesomeIcon icon={faLightbulb} /></div>
//               <div className="clock"><FontAwesomeIcon icon={faClock} /></div>
//             </div>
//             <div className="content">
//               <h1>Pay<b>Bill</b></h1>
//               <p>Pay your bill on the go now</p>
//             </div>
//           </div>
//           <div className="pb-btn">
//             {/* <Link to="/login"><button className="login-btn">Login</button></Link> 
//             <Link to="/register"><button className="register">New Customer ? Register</button></Link> */}

//             <button onClick={e => window.open('/login', '_self')} className="login-btn">Login</button>
//             <button onClick={e => window.open('/register', '_self')} className="register">New Customer ? Register</button>
//           </div>
//         </div>
//       </div>
//     </Router>
//     )
//   }
// }


