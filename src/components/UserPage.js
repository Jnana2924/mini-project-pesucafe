import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import "./UserPage.css"; // Custom styling for UserPage

const UserPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = () => {
    // You can add form validation or logic here if necessary

    // Navigate to the ChoicePage after submit
    navigate("/choice");
  };

  return (
    <div className="user-page-background">
      <div className="user-page-container">
        <h2>Welcome to Your User Page!</h2>
        <p>Please enter your details:</p>

        {/* Form with two input fields */}
        <div className="input-box">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="input-box">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserPage;
