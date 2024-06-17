import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './quest_four.css';
import keyImage from './key.png'; // Adjust the path as needed
import chestImage from './chest.png'; // Adjust the path as needed

const riddle = {
  question: `Everything from start to end has brought you here, thus Everything from start to end will help you here`,
  answer: '+917996607370',
};

const QuestFour = () => {
  const [inputValue, setInputValue] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isKeyVisible, setIsKeyVisible] = useState(false);
  const [isLockerOpen, setIsLockerOpen] = useState(false);
  const [keyPosition, setKeyPosition] = useState({ x: 0, y: 0 });
  const keyRef = useRef(null);
  const lockerRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.toLowerCase() === riddle.answer) {
      setIsCorrect(true);
      alert('Correct answer! You have completed the quest!');
      setIsKeyVisible(true);
    } else {
      setIsCorrect(false);
      alert('Try again!');
    }
  };

  const handleMouseOrTouchStart = (e) => {
    const isTouchEvent = e.type === 'touchstart';
    const clientX = isTouchEvent ? e.touches[0].clientX : e.clientX;
    const clientY = isTouchEvent ? e.touches[0].clientY : e.clientY;
    const shiftX = clientX - keyRef.current.getBoundingClientRect().left;
    const shiftY = clientY - keyRef.current.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      setKeyPosition({
        x: pageX - shiftX,
        y: pageY - shiftY,
      });
    };

    const onMouseMove = (e) => {
      moveAt(e.pageX, e.pageY);
    };

    const onTouchMove = (e) => {
      moveAt(e.touches[0].pageX, e.touches[0].pageY);
    };

    const onMouseUpOrTouchEnd = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('mouseup', onMouseUpOrTouchEnd);
      document.removeEventListener('touchend', onMouseUpOrTouchEnd);
      checkCollision();
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('mouseup', onMouseUpOrTouchEnd);
    document.addEventListener('touchend', onMouseUpOrTouchEnd);
  };

  const checkCollision = () => {
    const keyRect = keyRef.current.getBoundingClientRect();
    const lockerRect = lockerRef.current.getBoundingClientRect();

    if (
      keyRect.left < lockerRect.right &&
      keyRect.right > lockerRect.left &&
      keyRect.top < lockerRect.bottom &&
      keyRect.bottom > lockerRect.top
    ) {
      setIsLockerOpen(true);
      alert('You have opened the locker!');
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
      {isKeyVisible && (
        <img
          ref={keyRef}
          src={keyImage}
          alt="Hidden Key"
          className="key visible"
          style={{ left: keyPosition.x, top: keyPosition.y }}
          onMouseDown={handleMouseOrTouchStart}
          onTouchStart={handleMouseOrTouchStart}
        />
      )}
      <img
        ref={lockerRef}
        src={chestImage}
        alt="Locker"
        className="locker"
      />
      {isLockerOpen && (
        <button onClick={() => navigate('/')} className="jungle-button">
          Go Home
        </button>
      )}
    </div>
  );
};

export default QuestFour;
