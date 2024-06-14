// src/App.js
import React from 'react';
import './App.css';
import Start from './components/start/start';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Start />
      </header>
    </div>
  );
}

export default App;
