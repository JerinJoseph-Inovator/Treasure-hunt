// src/components/start/start.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './start.css';
import PageContainer from '../PageContainer/PageContainer';

function Start() {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/quest_one');
  };

  return (
    <PageContainer>
      <div className="centric">
        <div className="content">
          <h1>Do you have what it takes to uncover the hidden treasure and conquer the challenges ahead?</h1>
          <div className="button-group">
            <button className="jungle-button yes-button" onClick={handleYesClick}>Yes</button>
            <button className="jungle-button no-button">No</button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Start;
