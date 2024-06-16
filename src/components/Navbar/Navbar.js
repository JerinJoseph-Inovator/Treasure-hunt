import React, { useState } from 'react';
import './Navbar.css';
import MapIcon from './Map_Icon.png';
import map from './map.png';
import IIcon from './IIcon.png';

const infoTexts = [
  "1) Patterns & color are crucial in game never miss a pattern never miss a color",
  "2) Every Detail be it in words or letters can be converted. Conversion is the play",
  "3) All the digits are in your hand, you need to figure out which one you need and which one you should leave",
  "4) Letters are crucial in this treasure hunt",
  "5) Sometimes Math’s Helps",
  "6) Answer can help you find other answers. One can lead to other.",
  "7) Remember past, coz past holds lot of answers ",
  "8) Counting is important",
  "9) Sometimes being clueless is the answer",
  "10) Mathematics is the key to everything at times",
  "11) Reminder: Counting is important",
  "12) Take two steps back always to get to the core of the solution",
  "13) Reminder:- Patterns & color are crucial in game never miss a pattern never miss a color."
];

const Navbar = () => {
  const [showMap, setShowMap] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleMapIconClick = () => {
    setShowMap(!showMap);
  };

  const handleBackButtonClick = () => {
    setShowMap(false);
  };

  const handleIIconClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img 
            src={IIcon} 
            alt="I Icon" 
            className="i-icon" 
            onClick={handleIIconClick} 
          />
          <h1>Treasure Hunt</h1>
        </div>
        <div className="navbar-right">
          {showMap ? (
            <button className="back-button" onClick={handleBackButtonClick}>
              Back
            </button>
          ) : (
            <img 
              src={MapIcon} 
              alt="Map Icon" 
              className="map-icon" 
              onClick={handleMapIconClick} 
            />
          )}
        </div>
      </nav>
      {showMap && (
        <div className="overlay" onClick={handleMapIconClick}>
          <div className="map-container">
            <img src={map} alt="Map" className="map-image" />
          </div>
        </div>
      )}
      {showInfo && (
        <div className="overlay" onClick={handleIIconClick}>
          <div className="info-container">
            {infoTexts.map((text, index) => (
              <p key={index} className="info-text">{text}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
