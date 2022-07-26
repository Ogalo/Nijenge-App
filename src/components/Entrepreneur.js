import React, {useState} from 'react';
import Proposal from './Proposal';

function Entrepreneur() {
  const [files, setFiles] = useState([{
    name: "proposal.pdf"
  }])

  return (
    <div className='proposalContainer'>
      <h1>Entrepreneur Proposal</h1>
      <p>Please fill in the form</p>

      <div>
        <form action='class' onSubmit={()=> {}}>
          <label for="text"><b>Business Name</b></label>
          <input onChange={()=>{}} placeholder="Enter the Business Name" name='business' id='busina' required />

          <label for="probState"><b>Problem Statement</b></label>
          <input onChange={()=>{}} placeholder="Enter the Problem Statement" name='business' id='busina2' required />

          
          <label for="solSummary"><b>Solution Summary</b></label>
          <input onChange={()=>{}} placeholder="Enter Solution" name='business' id='busina3' required />

          
          <label for="probState"><b>Target Market</b></label>
          <input onChange={()=>{}} placeholder="Target market" name='business' id='busina4' required />

          
          <label for="Amount"><b>Amount Request</b></label>
          <input onChange={()=>{}} placeholder="Enter the Problem Statement" name='business' id='busina5' required />


          
          <label for="probState"><b>Returns and Expectations</b></label>
          <input onChange={()=>{}} placeholder="Enter value in Dollars" name='business' id='busina6' required />


          
          <label for="shares"><b>Shares Offer</b></label>
          <input onChange={()=>{}} placeholder="Enter the Problem Statement" name='business' id='busina2' required />

          <label for="plan"><b>Business Plan</b></label>
          <p>Please upload your business Plan</p>
          <Proposal files={files} setFiles={setFiles} />
          
          <button type='submit' onClick={()=>{}}>Submit Form</button>
        </form>
      </div>

      
    </div>
  )
}

export default Entrepreneur;