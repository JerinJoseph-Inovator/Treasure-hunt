import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './quest_two.css';

const QuestTwo = () => {
  const [audio] = useState(new Audio(require('./morse.mp3'))); // Use require for audio import
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, isPlaying]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleHintClick = () => {
    setShowHint(true);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const correctAnswer = 'mirror'; // Update with the correct answer
    if (inputValue.toLowerCase() === correctAnswer) {
      setIsCorrect(true);
      alert('Correct answer!');
      navigate('/quest_three'); // Navigate to QuestThree
    } else {
      setIsCorrect(false);
      alert('Try again!');
    }
  };

  return (
    <div className="audio-question-page">
      <h1>Audio Question</h1>
      <div className="audio-controls">
        <button onClick={handlePlay} disabled={isPlaying}>
          Play Audio
        </button>
        <button onClick={handlePause} disabled={!isPlaying}>
          Pause Audio
        </button>
        <button onClick={handleHintClick}>
          Hint
        </button>
      </div>
      {showHint && (
        <p className="hint-text">
          -- .. .-. .-. --- .-.
        </p>
      )}
      <div className="answer-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="jungle-input"
        />
        <button onClick={handleSubmit} className="jungle-button">
          Submit
        </button>
      </div>
    </div>
  );
};

export default QuestTwo;
