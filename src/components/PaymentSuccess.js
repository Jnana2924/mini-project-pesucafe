import React from "react";
import { useLocation } from "react-router-dom";
import "../PaymentSuccess.css";

function PaymentSuccess() {
  const location = useLocation();
  const { token } = location.state || {}; // Access token passed from SummaryPage

  return (
    <div className="payment-success">
      <div className="success-box">
        <div className="success-icon">✔️</div>
        <h1>Payment Successful</h1>
        {token ? (
          <>
            <p>Your token number is:</p>
            <div className="token-number">{token}</div>
          </>
        ) : (
          <p>Failed to generate token. Please try again.</p>
        )}
      </div>
    </div>
  );
}

export default PaymentSuccess;
