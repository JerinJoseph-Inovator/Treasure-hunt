// src/components/navbar/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import MapIcon from './Map_Icon.png';
import map from './map.png';
import IIcon from './IIcon.png'; // Assuming you have an I_Icon.png file for the new button

const Navbar = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMapIconClick = () => {
    setShowMap(!showMap);
  };

  const handleBackButtonClick = () => {
    setShowMap(false);
  };

  const handleIIconClick = () => {
    // Handle the click event for the I Icon button
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
    </div>
  );
};

export default Navbar;
