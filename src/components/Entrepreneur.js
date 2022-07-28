import React from 'react';


function Entrepreneur() {


  return (
      <div>
      <section className="entrePage" id="entrePage">
        <form action="" class="entrepreneur" id="entreProp">
          <span className = "closeBtn2">
          <i className = "fas fa-times"></i>
          </span>
        <div className="proposal">
          <h1>Entrepreneur Proposal</h1>
        
    
          <label for="text"><b>business name</b></label>
          <input type="text" placeholder="Enter business name" name="business" id="busina" required />
    
          <label for="probState"><b>Problem Statement</b></label>
          <input type="text" placeholder="Enter problem statement" name="business" id="busina2" required />

         <label for="solSummary"><b> Solution Summary</b></label>
          <input type="text" placeholder="Enter solution" name="business" id="busina3" required />

          <label for="targetMarket"><b>Market</b></label>
          <input type="text" placeholder="What is your target market ?" name="business" id="busina4" required />

          <label for="competitors"><b>Competitors</b></label>
          <input type="text" placeholder="Who are your competitors ?" name="business" id="busina5" required />

          <label for="whyUs"><b> Why Us</b></label>
          <input type="text" placeholder="Why should I choose you ?" name="business" id="busina6" required />

         <label for="Forecast"><b>Returns and Expectations</b></label>
          <input type="text" placeholder="financial targets " name="business" id="forcast" required />

          <label for="Shares"><b>Share Offer</b></label>
          <input type="text" placeholder="Offering" name="Shares" id="shares" required />

          </div>

    
        
        
        <button type='submit' onClick={()=>{}}>Submit Form</button>
        </form>
      </section>
      </div>
      
  )
}

export default Entrepreneur;