import React from 'react';
import Entrepreneur from './components/Entrepreneur';
import Consultant from './components/Consultant';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import BusinessPage from './components/BusinessPage';

function App() {
  return (
    <div className="App">
     <Navbar />
     <BusinessPage />
     <Entrepreneur />
     <Consultant />
     <SignUp />
    </div>
  );
}

export default App;