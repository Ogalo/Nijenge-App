import React from 'react'
import { Link } from 'react-router-dom'

function BusinessPage() {
  return (
    <div>
    
        <div className="businessName">
          <h1>Nijenge</h1>
          <div className="target">
           <Link id="entreBtn" to="/entrepreneur">Entrepreneur</Link>
           <Link to='/venture' id="investBtn">Investor</Link>
           <Link to='/consultant' id="ConsulBtn">Consultants</Link>
           <Link to='/followUp' id="followBtn">Follow Ups</Link>
          </div>
        </div>
     
      
       <div className="navMenus">

         <div>
           <h3>Home</h3>
           <h3 id="aboutLink">About</h3>
           <h3>Services</h3>
           <h3>Contact Us</h3>
         </div>
     
       </div>
      
      </div>

    


  )
}

export default BusinessPage
