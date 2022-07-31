import React, {useState} from 'react'

function Proposal(props) {

  const [isBooked, setIsbooked] = useState(true);

  function handleBooked (event){
    setIsbooked(false)
  }
  return (
    <div>

    <div className="Proposals">
       <img src='../eberhard-grossgasteiger-rNWB3AaqxYs-unsplash.jpg' alt='businessImage'/>
       <h1>{props.businessName}</h1>
       <p>Asking For: {props.askingFor}</p>
       <p>Offers: {props.offer}</p>

       <button onClick={handleBooked}>{isBooked ? "Book" : "Booked"}</button>

    </div>


     
      
    
    </div>
  )
}


export default Proposal;