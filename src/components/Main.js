import React from 'react';
import Entrepreneur from './Entrepreneur';
import Consultant from './Consultant';
import SignUp from './SignUp';
import Navbar from './Navbar';
import BusinessPage from './BusinessPage';
import About from './About';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


function Main() {
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

export default Main;