// src/components/quest_four/QuestFour.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './quest_four.css';

const riddle = {
  question: `Everything from start to end has brought you here, thus Everything from start to end will help you here`,
  answer: '+917996607370',
};

const QuestFour = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.toLowerCase() === riddle.answer) {
      setIsCorrect(true);
      alert('Correct answer! You have completed the quest!');
      navigate('/'); // Navigate to the home page or another end page
    } else {
      setIsCorrect(false);
      alert('Try again!');
    }
  };

  return (
    <div className="riddle-page">
      <h1>Final Riddle</h1>
      <p>{riddle.question}</p>
      <div className="answer-input">
        {'_'.repeat(riddle.answer.length)}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="jungle-input"
        maxLength={riddle.answer.length}
      />
      <button onClick={handleSubmit} className="jungle-button">
        Submit
      </button>
    </div>
  );
};

export default QuestFour;
