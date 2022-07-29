import React from "react";
import BusinessPage from "./BusinessPage";
import Navbar from "./Navbar";


function Home() {
  return (
    <div className="mainPage">  
    <div className="main">
    <Navbar />
    <BusinessPage />
    </div>
    
    </div>
  );
}

export default Home;
