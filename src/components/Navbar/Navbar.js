// src/components/navbar/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMap, setShowMap] = useState(false);

  const handleMapIconClick = () => {
    setShowMap(!showMap);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <h1>Treasure Hunt</h1>
        </div>
        <div className="navbar-right">
          <img 
            src={`${process.env.PUBLIC_URL}/map_icon.png`} 
            alt="Map Icon" 
            className="map-icon" 
            onClick={handleMapIconClick} 
          />
        </div>
      </nav>
      {showMap && (
        <div className="overlay">
          <div className="map-container">
            <img src={`${process.env.PUBLIC_URL}/Map.png`} alt="Map" className="map-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
