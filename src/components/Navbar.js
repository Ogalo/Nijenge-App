import React from 'react';
import {NavLink, Link} from 'react-router-dom'



function Navbar() {
  return (
    <div className="main">
   
  
      <div className="navLinks">
      <NavLink
      id="nav-link"
      to="/"
    >
      Home
    </NavLink>
        <div className="mediaLinks">
          <a href="#" target="_self"><ion-icon name="logo-linkedIn"></ion-icon></a>
          <a href="#" target="_self"><ion-icon name="logo-Instagram"></ion-icon></a>
          <a href="#" target="_self"><ion-icon name="logo-twitter"></ion-icon></a>
          <a href="#" target="_self"><ion-icon name="logo-facebook"></ion-icon></a>
         
        </div>
        <div className="sign">
          <button id="butt1" className="link"><Link to="/signUp">Sign Up</Link></button>
        </div>
     </div>
    </div>
  )
}

export default Navbar;