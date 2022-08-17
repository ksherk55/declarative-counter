import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
 
    let [ counter, changeCounter ] = useState(1);
  window.changeCounter = changeCounter;
  return (
    <div>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
