import React from 'react';
import Entrepreneur from './Entrepreneur';
import Consultant from './Consultant';
import SignUp from './SignUp';
import Home from './Home';
import About from './About';
import Ventures from './Ventures';
import FollowUp from './FollowUp';
import Services from './Services';
import Contacts from './Contacts';
import {Route, Routes} from 'react-router-dom';
import SignIn from './SignIn';
import Navbar from './Navbar';
import BusinessPage from './BusinessPage';




function Main() {
  return (
    
      <div>
        <Navbar />
        <BusinessPage className="mainPage"/>
        
        <Routes>
        <Route path='/nijenge-app' element={<Home />}  />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/entrepreneur' element={<Entrepreneur />} />
        <Route path='/venture' element={<Ventures />} />
        <Route path='/consultant' element={<Consultant />} />
        <Route path='/followUp' element={<FollowUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Services />} />
        <Route path='/contactUs' element={<Contacts />} />
        
        </Routes>
      </div>
    

   
)}

export default Main;