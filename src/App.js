import React from 'react';
import Entrepreneur from './components/Entrepreneur';
import Consultant from './components/Consultant';
import Navbar from './components/Navbar';
import BusinessPage from './components/BusinessPage';
import About from './components/About';
import Registration from './components/Registration';

function App() {
  return (
    <div className="mainPage">
     <Navbar />
     <BusinessPage />
     <Entrepreneur />
     <Consultant />
     <Registration />
     <About />
    </div>
  );
}

export default App;