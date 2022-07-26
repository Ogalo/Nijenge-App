import React from 'react';
import './App.css';
import Entrepreneur from './components/Entrepreneur';
import Consultant from './components/Consultant';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
     <SignUp />
     <Entrepreneur />
     <Consultant />
    </div>
  );
}

export default App;