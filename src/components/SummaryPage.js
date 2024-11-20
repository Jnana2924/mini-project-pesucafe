import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../SummaryPage.css";

// Add all food items here
const foodNames = {
  food1: "French Fries",
  food2: "Roll",
  food3: "Sandwich",
  food4: "Fried Rice",
  food5: "Burger",
  food6: "Momos",
  food7: "Pav Bhaji",
  food8: "Chole Bhature",
  food9: "Kachori",
  food10: "Samosa",
  food11: "Idly",
  food12: "Masala Dosa",
  food13: "Chicken Shawarma",
  food14: "Chicken Biryani",
  food15: "Ice Cream",
  food16: "Lemon Chicken",
  food17: "Fresh Fruit Juice",
  food18: "Pizza",
  food19: "South Indian Meals",
  food20: "Gobi Manchuria",
  food21: "Bisibelebath",
  food22: "Puliyogare",
  food23: "Vaangibath",
};

function SummaryPage() {
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  // Load order details from localStorage
  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("orderDetails"));
    if (orderData) {
      setOrderDetails(orderData);
    }
  }, []);

  // Handle the payment process and token generation
  const handlePayment = () => {
    // Generate a random token (simulating backend token generation)
    const token = `TOKEN-${Math.floor(Math.random() * 10000)}`;

    // Navigate to the payment success page with token
    navigate("/payment-success", { state: { token } });
  };

  if (!orderDetails) {
    return <p>Loading order details...</p>;
  }

  return (
    <div className="summary-page">
      <h1>Order Summary</h1>
      <div className="order-details">
        <div className="floor-details">
          {Object.entries(orderDetails.items).map(([itemKey, quantity]) => (
            <div key={itemKey} className="order-item">
              <span className="food-name">{foodNames[itemKey]}</span>:{" "}
              <span className="food-quantity">{quantity}</span>
            </div>
          ))}
        </div>
        <p className="total-price">Total: ₹{orderDetails.total}</p>
        <button onClick={handlePayment} className="pay-button">
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default SummaryPage;
