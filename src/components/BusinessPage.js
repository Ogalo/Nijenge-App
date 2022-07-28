import React from 'react'

function BusinessPage() {
  return (
    <div className='mainPage'>
    
        <div className="businessName">
          <h1>Nijenge</h1>
          <div className="target">
           <h4 id="entreBtn"><a href="#">Entrepreneur</a></h4>
           <h4 id="investBtn"><a href="#">Investor</a></h4>
           <h4 id="ConsulBtn"><a href="#">Consultants</a></h4>
           <h4 id="followBtn"><a href="#">Follow Ups</a></h4>
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
