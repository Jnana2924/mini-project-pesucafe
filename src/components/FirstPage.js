import React from "react";
import { useNavigate } from "react-router-dom";
import "../components/FirstPage.css"; // Updated CSS file for the first page
import pesuLogo from "../assets/pesu.png"; // Pesu logo
import backgroundImage from "../assets/background.jpg"; // Background image

function FirstPage() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Navigate to Login Page on "Let's get started" click
  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="app">
      {/* Set the background image */}
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Transparent box containing the content (Are you hungry?) */}
      <div className="transparent-box">
        <div className="header-text">Are you hungry?</div>

        {/* Flex container for the logo and the button */}
        <div className="get-started-container">
          {/* Pesu logo */}
          <img src={pesuLogo} alt="Pesu Logo" className="pesu-logo" />

          {/* "Let's get started" button */}
          <button className="get-started-btn" onClick={handleGetStarted}>
            Let's get started
          </button>
        </div>
      </div>

      {/* New top-right box with Pesu Cafe */}
      <div className="top-right-box">
        <h1>Pesu Cafe</h1>
      </div>
    </div>
  );
}

export default FirstPage;
