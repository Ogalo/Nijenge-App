import React from 'react';
import {Link} from 'react-router-dom';

function Ventures() {
  return (
    <div>
    <section className="investPage" id="investPage">
   
        
    <div className="investors">
      <span className = "closeBtn3">
      <Link to='/nijenge-app'><i className = "fas fa-times"></i></Link>
    </span>
    
      <h1>Investors</h1>
                 
      <div className="optionSelect">
      <label htmlFor="Forecast"><b>Category:</b></label>
          <input type="text" placeholder="All " name="business" id="optionSelect" className="optionSelect" required />
      </div>             
        <table className="content-table" id="content-table">
        <thead>
          <tr>
            <th></th>
            <th>Proposal</th>
            <th>Forecast</th>
            <th>Shares.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td id="venture">Auctioneer</td>
            <td id="cost">$ 1200000</td>
            <td id="divident">20%</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Potato Farming</td>
            <td>$ 400000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Food Delivery</td>
            <td>$ 1600000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>IT training Center</td>
            <td>$ 800000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>LandScaping Mover</td>
            <td>$ 500000</td>
            <td>20%</td>
          </tr>
  
        </tbody>
      </table>  
      
      <div>
        <button className="registerbtn" id="tablebtn">Update data</button>
      </div>
  
    </div>
   
  

  </section>
    </div>
  )
}

export default Ventures;