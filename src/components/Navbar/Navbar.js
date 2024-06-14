// src/components/navbar/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import Map_Icon from './Map_Icon.png';
import map from './map.png';

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
            src= {Map_Icon} 
            alt="Map Icon" 
            className="map-icon" 
            onClick={handleMapIconClick} 
          />
        </div>
      </nav>
      {showMap && (
        <div className="overlay">
          <div className="map-container">
            <img src={map} alt="Map" className="map-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
