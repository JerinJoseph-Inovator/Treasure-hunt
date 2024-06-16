import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './components/start/start';
import Navbar from './components/Navbar/Navbar';
import QuestOne from './components/quest_one/quest_one';
import QuestTwo from './components/quest_two/quest_two';
import QuestThree from './components/quest_three/quest_three';
import QuestFour from './components/quest_four/quest_four';

function App() {
  return (
    <Router basename="/Treasure-hunt">
      <div className="App">
        <Navbar />
        <div className="App-header">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/quest_one" element={<QuestOne />} />
            <Route path="/quest_two" element={<QuestTwo />} />
            <Route path="/quest_three" element={<QuestThree />} />
            <Route path="/quest_four" element={<QuestFour />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
