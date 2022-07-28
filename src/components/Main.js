import React from 'react';
import Entrepreneur from './Entrepreneur';
import Consultant from './Consultant';
import SignUp from './SignUp';
import About from './About';
import Ventures from './Ventures';
import FollowUp from './FollowUp';
import Services from './Services';
import Contacts from './Contacts';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import SignIn from './SignIn';


function Main() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/signUp' component={SignUp} />
        <Route path='/signIn' component={SignIn} />
        <Route path='/entrepreneur' component={Entrepreneur} />
        <Route path='/venture' component={Ventures} />
        <Route path='/consultant' component={Consultant} />
        <Route path='/followUp' component={FollowUp} />
        <Route path='/about' component={About} />
        <Route path='/service' component={Services} />
        <Route path='/contactUs' component={Contacts} />
        
        </Switch>
      </div>
    </BrowserRouter>

   
)}

export default Main;