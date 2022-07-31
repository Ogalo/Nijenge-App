import React, {useState, useEffect} from 'react'

function Proposal() {

   
   const [details, setDetails] = useState ([]);
   const [book, setBook] =useState(true);
   

  function handleBooked (){
    
    setBook((book)=>!book)
    

    }

    useEffect(() => {
      fetch('https://nijenge-backend-app.herokuapp.com/entrepreneurs')
      .then((res)=>res.json())
      .then((data)=>{
        setDetails(data)
        console.log(data)
      })
    }, [])

    const businessDetails = details;



  return (
    <div className="post">
    {businessDetails.map((detail)=>(
      <div className='userInfo' key={detail.id}>
       <h1>Summary: {detail.plan}</h1>
       <h1>Business Name: {detail.business}</h1>
       <p>Asking For: $ {detail.returns}</p>
       <p>Offers: {detail.offers}% </p>
       <button onClick={handleBooked}>{book? "Book": "Booked"}</button>
      </div>
      
    ))}
      
    </div>
  )
}


export default Proposal;