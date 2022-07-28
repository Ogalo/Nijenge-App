import React from 'react';
import Entrepreneur from './components/Entrepreneur';
import Consultant from './components/Consultant';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import BusinessPage from './components/BusinessPage';
import About from './components/About';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="mainPage">
     <Navbar />
     <BusinessPage />
     <Entrepreneur />
     <Consultant />
     <SignUp />
     <About />
    </div>
  );
}

export default App;