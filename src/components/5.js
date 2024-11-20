import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/4.css";
import food7 from "../assets/food7.webp"; // Pav Bhaji
import food8 from "../assets/food8.jpg"; // Chole Bhature
import food9 from "../assets/food9.jpg"; // Kachori
import food10 from "../assets/food10.jpg"; // Samosa
import food11 from "../assets/food11.jpg"; // Idly
import food12 from "../assets/food12.jpg"; // Masala Dosa

function FivePage() {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const handleAddRemove = (food, operation) => {
    setCart((prevCart) => {
      const currentCount = prevCart[food] || 0;
      const newCount = operation === "add" ? currentCount + 1 : Math.max(currentCount - 1, 0);
      return { ...prevCart, [food]: newCount };
    });
  };

  const getTotalPrice = () => {
    const prices = {
      food7: 100,  // Pav Bhaji
      food8: 120,  // Chole Bhature
      food9: 90,   // Kachori
      food10: 70,  // Samosa
      food11: 60,  // Idly
      food12: 110, // Masala Dosa
    };
    let total = 0;
    for (const food in cart) {
      total += prices[food] * cart[food];
    }
    return total;
  };

  const handleProceedToPayment = () => {
    const orderDetails = {
      items: cart,
      total: getTotalPrice(),
      time: new Date(),
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    navigate("/summary");
  };

  return (
    <div className="food-page">
      <h2>5th Floor Menu</h2>
      <div className="food-items">
        {/* Food Item 7 - Pav Bhaji */}
        <div className="food-item">
          <img src={food7} alt="Pav Bhaji" />
          <h3>Pav Bhaji</h3>
          <p>₹100</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food7", "remove")}>-</button>
            <span>{cart.food7 || 0}</span>
            <button onClick={() => handleAddRemove("food7", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 8 - Chole Bhature */}
        <div className="food-item">
          <img src={food8} alt="Chole Bhature" />
          <h3>Chole Bhature</h3>
          <p>₹120</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food8", "remove")}>-</button>
            <span>{cart.food8 || 0}</span>
            <button onClick={() => handleAddRemove("food8", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 9 - Kachori */}
        <div className="food-item">
          <img src={food9} alt="Kachori" />
          <h3>Kachori</h3>
          <p>₹90</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food9", "remove")}>-</button>
            <span>{cart.food9 || 0}</span>
            <button onClick={() => handleAddRemove("food9", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 10 - Samosa */}
        <div className="food-item">
          <img src={food10} alt="Samosa" />
          <h3>Samosa</h3>
          <p>₹70</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food10", "remove")}>-</button>
            <span>{cart.food10 || 0}</span>
            <button onClick={() => handleAddRemove("food10", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 11 - Idly */}
        <div className="food-item">
          <img src={food11} alt="Idly" />
          <h3>Idly</h3>
          <p>₹60</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food11", "remove")}>-</button>
            <span>{cart.food11 || 0}</span>
            <button onClick={() => handleAddRemove("food11", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 12 - Masala Dosa */}
        <div className="food-item">
          <img src={food12} alt="Masala Dosa" />
          <h3>Masala Dosa</h3>
          <p>₹110</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food12", "remove")}>-</button>
            <span>{cart.food12 || 0}</span>
            <button onClick={() => handleAddRemove("food12", "add")}>+</button>
          </div>
        </div>
      </div>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total: ₹{getTotalPrice()}</p>
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default FivePage;
