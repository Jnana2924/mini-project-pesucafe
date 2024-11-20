import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../App.css"; // Importing the CSS file
import backgroundImage from "../assets/background.jpg"; // Importing background image
import chefIcon from "../assets/profile.png"; // Importing profile icon

function LoginPage() {
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle login button click - navigate to UserPage
  const handleLogin = () => {
    navigate("/user"); // Navigate to the UserPage when Login button is clicked
  };

  // Handle Sign In button click - navigate to SignUp
  const handleSignIn = () => {
    navigate("/signup"); // Navigate to the SignUp page when Sign In is clicked
  };

  return (
    <div className="app">
      {/* Set the background image using inline styling */}
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Welcome card section */}
      <div className="welcome-card">
        <div className="header-section">
          {/* Profile icon */}
          <img src={chefIcon} alt="Chef Icon" className="profile-icon" />
          <h1>Welcome Back</h1>
        </div>

        {/* Buttons */}
        <div className="buttons">
          {/* Login button */}
          <button className="btn" onClick={handleLogin}>
            Login
          </button>

          {/* Sign In button */}
          <button className="btn" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
