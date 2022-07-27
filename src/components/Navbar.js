import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {

const handleRegistration=()=>{
   
}


  return (
    <div className="main">
   
  
      <div className="navLinks">
        <div className="mediaLinks">
          <Link to={'/'}><ion-icon name="logo-linkedIn"></ion-icon></Link>
          <Link to={'/'}><ion-icon name="logo-Instagram"></ion-icon></Link>
          <Link to={'/'}><ion-icon name="logo-twitter"></ion-icon></Link>
          <Link to={'/'}><ion-icon name="logo-facebook"></ion-icon></Link>
         
        </div>
        <div className="sign">
          <button id="butt1" className="link" onClick={handleRegistration}><Link to={"/signUp"}>Sign Up</Link></button>
        </div>
     </div>
    </div>
  )
}

export default Navbar;