import React from 'react';
import Farming from './farming.jpg'


function Consultant() {
  return (
    <div>

      <h1>Consultants</h1>
      <div className='consultants'>
       
        <img src={Farming} height="200px" width="300px"/>
        <h2>Name</h2>
        <p>Profession</p>
        <p>Experience</p>
        <p>Organization</p>

      </div>
      <div className='consultants'>
        <img src={Farming} height="200px" width="300px"/>
        <h2>Name: Caleb Karuga</h2>
        <p>Profession: Farming</p>
        <p>Experience: in both animal and crop farming</p>
        <p>Organization: Wendy Farm</p>

      </div>
      <div className='consultants'>
      <img src={Farming} height="200px" width="300px"/>
      <h2>Name</h2>
      <p>Profession</p>
      <p>Experience</p>
      <p>Organization</p>

    </div>
    </div>
  )
}


export default Consultant;