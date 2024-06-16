import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './quest_one.css';

const riddles = [
  {
    question: `In a sacred place where echoes sing,
Count the voices from above that ring.
Then flip the number, a simple fix,
And tell me, what is the digit?`,
    answer: 'nine',
  },
  {
    question: `To find the key, a date you must see,
Today's the clue, so mark it with glee.
From the full date, a digit to take,
It's the very first number, for your answer's sake.`,
    answer: '1', // Assuming today's date starts with '1'
  },
  {
    question: `I'm a gleaming marvel, reaching for the sky,
Reflecting light with a sparkle, oh so high.
Where dreams ascend, in a tower tall,
My walls are glass, standing proud and all.`,
    answer: 'crystal',
  },
  {
    question: `By the shimmering lake, where dreams take flight,
Glowing orbs dance in the gentle night.
Count the lights, each one a gleaming star,
Tell me now, how many shine from afar?
(Mirror the second number and subtract the result by 1)`,
    answer: '7',
  },
  {
    question: `I'm a large insect, majestic and free,
My wings are a canvas, a deep blue sea.
With grace in my flight, I dance in the sky,
A butterfly's beauty, soaring high.`,
    answer: 'butterfly',
  },
];

const QuestOne = () => {
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
        navigate('/quest_two'); // Navigate to QuestTwo
      }
    } else {
      alert('Try again!');
    }
  };

  const currentRiddle = riddles[currentRiddleIndex];
  const numberOfLetters = currentRiddle.answer.length;

  return (
    <div className="quest_one">
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

export default QuestOne;
