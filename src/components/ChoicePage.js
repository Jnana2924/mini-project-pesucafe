import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../App.css"; // Reuse global App.css styling
import backgroundImage from "../assets/background.jpg"; // Background image

function ChoicePage() {
  const navigate = useNavigate();

  // Navigation handlers
  const handle4thFloor = () => {
    navigate("/4"); // Navigate to the 4th Floor page
  };

  const handleFivePage = () => {
    navigate("/5"); // Navigate to the 5.js page
  };

  const handlePixel = () => {
    navigate("/pixel"); // Navigate to the Pixel page
  };

  const handleVakula = () => {
    navigate("/vakula"); // Navigate to the Vakula page
  };

  return (
    <div className="app">
      {/* Background image */}
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Choice card section */}
      <div className="welcome-card">
        <div className="header-section">
          <h1>Select Your Choice</h1>
        </div>

        {/* Choice buttons */}
        <div className="buttons">
          <button className="btn" onClick={handle4thFloor}>
            4th Floor
          </button>
          <button className="btn" onClick={handleFivePage}>
            5th Floor
          </button>
          <button className="btn" onClick={handlePixel}>
            Pixel
          </button>
          <button className="btn" onClick={handleVakula}>
            Vakula
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChoicePage;
