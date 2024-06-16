// src/components/quest_three/QuestThree.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './quest_three.css';

const riddles = [
  {
    question: `Count number of "YOU" in mirrors and divide it by 3`,
    answer: 'six',
  },
  {
    question: `Go to Number 8 and find the number over there, it is the shape of the biggest noun, you are standing infront of`,
    answer: '0',
  },
  {
    question: `I can build a tower, strong and tall,
Or stop your path with a sudden wall.
A solid piece, both square and stout,
What am I, without a doubt? give my count`,
    answer: '7',
  },
  {
    question: `Words in my favorite song?`,
    answer: 'three',
  },
];

const QuestThree = () => {
  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const currentRiddle = riddles[currentRiddleIndex];
    if (inputValue.toLowerCase() === currentRiddle.answer) {
      if (currentRiddleIndex < riddles.length - 1) {
        setCurrentRiddleIndex(currentRiddleIndex + 1);
        setInputValue('');
      } else {
        alert('You have completed all the riddles!');
        navigate('/quest_four'); // Navigate to QuestFour
      }
    } else {
      alert('Try again!');
    }
  };

  const currentRiddle = riddles[currentRiddleIndex];
  const numberOfLetters = currentRiddle.answer.length;

  return (
    <div className="riddle-page">
      <h1>Riddle</h1>
      <p>{currentRiddle.question}</p>
      <div className="answer-input">
        {'_'.repeat(numberOfLetters)}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="jungle-input"
        maxLength={numberOfLetters}
      />
      <button onClick={handleSubmit} className="jungle-button">
        Submit
      </button>
    </div>
  );
};

export default QuestThree;
