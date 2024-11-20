import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import ChoicePage from "./components/ChoicePage";
import UserPage from "./components/UserPage";
import Four from "./components/4";
import PixelPage from "./components/PixelPage";
import FivePage from "./components/5";
import VakulaPage from "./components/vakula";
import SummaryPage from "./components/SummaryPage";
import PaymentSuccess from "./components/PaymentSuccess"; // Make sure this is correctly imported

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/4" element={<Four />} />
        <Route path="/5" element={<FivePage />} />
        <Route path="/pixel" element={<PixelPage />} />
        <Route path="/vakula" element={<VakulaPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} /> {/* Make sure this is here */}
      </Routes>
    </Router>
  );
}

export default App;
