import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Start from './components/start/start';
import Navbar from './components/Navbar/Navbar';
import QuestOne from './components/quest_one/quest_one';
import QuestTwo from './components/quest_two/quest_two'; // Import QuestTwo
import QuestThree from './components/quest_three/quest_three'; // Import QuestTwo

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/quest_one" element={<QuestOne />} />
          <Route path="/quest_two" element={<QuestTwo />} /> {/* Add route for QuestTwo */}
          <Route path="/quest_three" element={<QuestThree />} /> {/* Add route for QuestTwo */}
        </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
