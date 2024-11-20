import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigation hook
import "./SignUp.css"; // Import custom SignUp styling

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To display validation errors
  const navigate = useNavigate(); // For navigation

  // Validate email format
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Handle form submission
  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      setErrorMessage("Please enter a valid email address!");
    } else if (password.trim() === "") {
      setErrorMessage("Password cannot be empty!");
    } else {
      setErrorMessage(""); // Clear any error messages
      navigate("/choice"); // Navigate to ChoicePage
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <input
          type="text"
          className="signup-input"
          placeholder="Enter your Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        {/* Display error message if any */}
        {errorMessage && <div className="alert">{errorMessage}</div>}
        <button className="signup-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default SignUp;
