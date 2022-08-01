import React from "react";
import lawyer from '../image/Harvey Spector.jpg'
import Chris  from '../image/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg'
import caleb from '../image/Caleb-Karuga-47107213.jpg'
import ali from '../image/ali-morshedlou-WMD64tMfc4k-unsplash.jpg'

function Consultant() {
  return(
   <div className="consultants">
     <div className="professional">
     <img src={lawyer} alt="lawyer"/>
     <h1>Name: Harvey Spector</h1>
     <p>Profession: Lawyer</p>
     </div>

     <div className="professional">
     <img src={caleb} alt="lawyer"/>
     <h1>Name: John Oduor</h1>
     <p>Profession: financial Advisor</p>
     </div>

     <div className="professional">
     <img src={Chris} alt="lawyer"/>
     <h1>Name: Ogalo Harry</h1>
     <p>Profession: Lawyer</p>
     </div>

     <div className="professional">
     <img src={ali} alt="lawyer"/>
     <h1>Name: Caleb Karuga</h1>
     <p>Profession: Lawyer</p>
     </div>

  </div>
)}

export default Consultant;
