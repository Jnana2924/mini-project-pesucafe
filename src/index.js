import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Import App.js and its logic
import "./App.css";  // Import the global CSS file

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />  // Render the App component directly
);
