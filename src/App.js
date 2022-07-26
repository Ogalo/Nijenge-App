import React from 'react';
import Entrepreneur from './components/Entrepreneur';
import Consultant from './components/Consultant';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import BusinessPage from './components/BusinessPage';
import About from './components/About';

function App() {
  return (
    <div className="App">
     <Navbar />
     <BusinessPage />
     <Entrepreneur />
     <Consultant />
     <SignUp />
     <About />
    </div>
  );
}

export default App;