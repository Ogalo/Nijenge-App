import React, {useState} from 'react'

function Proposal() {

  
   const [datas, setDatas] = useState (
    [{
      id: "0",
      business: "",
      imageUrl: "",
      proposal: "",
      offer: ""
    }]
  );

  function handleBooked (){
    setDatas(false)
    return alert ('Your have booked a venture. The entreprenuer has been alerted')
  }

  return (
    <div className="post">
    {datas.map((data)=>(
      <div className='proposal' key={data.id}>
      <img src={data.imageUrl} alt='businessImage'/>
       <h1>{data.business}</h1>
       <p>Asking For: {data.proposal}</p>
       <p>Offers: $ {data.offer}</p>

       <button onClick={handleBooked}>{data ? "Book" : "Booked"}</button>

      </div>
    ))}

      
    </div>
  )
}


export default Proposal;