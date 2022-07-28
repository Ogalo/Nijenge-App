import React from 'react'
import BusinessPage from './BusinessPage';
import Navbar from './Navbar';

function Home() {
  return (
    <div className='mainPage'>
      <Navbar />
      <BusinessPage />
    </div>
  )
}

export default Home;
