import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Login from './components/Login';
import Register from './components/Register';
import Update from './components/Update';
import PayYourBill from './components/PayYourBill';
import OverViewPage from './components/OverViewPage';

export default function App() {
  return (
    <div className="App">
      {/* <Hero /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Update /> */}
      {/* <PayYourBill /> */}
      <OverViewPage />
    </div>
  );
}
