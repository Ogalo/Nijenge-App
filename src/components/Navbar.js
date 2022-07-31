import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navLinks">
      <div className="mediaLinks">
        <a href="/" target="_self">
          <ion-icon name="logo-linkedIn"></ion-icon>
        </a>
        <a href="/" target="_self">
          <ion-icon name="logo-Instagram"></ion-icon>
        </a>
        <a href="/" target="_self">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a href="/" target="_self">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </div>
      <div className="sign">
        <Link to="/signIn">
          <button id="butt1" className="link">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
