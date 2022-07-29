import React from 'react'

function BusinessPage() {
  return (
    <div className='mainPage'>
    
        <div className="businessName">
          <h1>Nijenge</h1>
          <div className="target">
           <h4 id="entreBtn"><a href="/entrepreneur">Entrepreneur</a></h4>
           <h4 id="investBtn"><a href="/venture">Investor</a></h4>
           <h4 id="ConsulBtn"><a href="/consultant">Consultants</a></h4>
           <h4 id="followBtn"><a href="/followUp">Follow Ups</a></h4>
          </div>
        </div>
     
      
       <div className="navMenus">

         <div>
           <h3><a href='/'>Home</a></h3>
           <h3 id="aboutLink"><a href='/about'>About</a> </h3>
           <h3><a href='/service'>Services</a></h3>
           <h3><a href='/contact'>Contact Us</a></h3>
         </div>
     
       </div>
      
      </div>

    


  )
}

export default BusinessPage
