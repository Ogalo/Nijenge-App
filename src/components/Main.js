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





function Main() {
  return (
    
      <div>
           
        
        <Routes>
        <Route path='/' element={<Home />}  exact/>
        <Route path='/signUp' element={<SignUp />} exact/>
        <Route path='/signIn' element={<SignIn />} exact/>
        <Route path='/entrepreneur' element={<Entrepreneur />} exact/>
        <Route path='/venture' element={<Ventures />} exact/>
        <Route path='/consultant' element={<Consultant />} exact/>
        <Route path='/followUp' element={<FollowUp />} exact/>
        <Route path='/about' element={<About />} exact/>
        <Route path='/service' element={<Services />} exact/>
        <Route path='/contactUs' element={<Contacts />} exact/>
        
        </Routes>
      </div>
    

   
)}

export default Main;