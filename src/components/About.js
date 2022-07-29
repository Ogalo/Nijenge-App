import React from 'react';
import {Link} from 'react-router-dom'

function About() {
  return (
    <div>
    <section className="about" id="about">

    <span className = "closeBtn5">
    <Link to='/nijenge-app'><i className = "fas fa-times"></i></Link>
    </span>
    
    <h1>About Nijenge</h1>
    <p><b>Nijenge</b> will bridge the gap between entrepreneurs and investors by providing a platform where individuals who are entrepreneurs can share their ideas under strict confidentiality and investors that is anyone who has the cash and would like to support and venture into the business idea that the entrepreneur provides. This will then ensure that both parties get into an agreement where each and every individual profits, therefore leading to a growth of the economy by encouraging investments and the creation of opportunities.</p>
    
    </section>
    </div>
  )
}

export default About
