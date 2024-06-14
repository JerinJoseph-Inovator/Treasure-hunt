import React from 'react';
import './start.css';
import PageContainer from '../PageContainer/PageContainer';

function Start() {
  return (
    <PageContainer>
      <div className="centric">
        <div className="content">
          <h1>Do you have what it takes to uncover the hidden treasure and conquer the challenges ahead?</h1>
          <div className="button-group">
            <button className="jungle-button yes-button">Yes</button>
            <button className="jungle-button no-button">No</button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}

export default Start;
