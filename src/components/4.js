import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../components/4.css"; // Import the CSS file
import food1 from "../assets/food1.jpg"; // Example food image
import food2 from "../assets/food2.jpg"; // Example food image
import food3 from "../assets/food3.jpg"; // Example food image
import food4 from "../assets/food4.jpg"; // Example food image
import food5 from "../assets/food5.jpg"; // Example food image
import food6 from "../assets/food6.jpg"; // Example food image

function FourPage() {
  const [cart, setCart] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle adding and removing items from the cart
  const handleAddRemove = (food, operation) => {
    setCart((prevCart) => {
      const currentCount = prevCart[food] || 0;
      const newCount = operation === "add" ? currentCount + 1 : Math.max(currentCount - 1, 0);
      return { ...prevCart, [food]: newCount };
    });
  };

  // Function to calculate total price of items in the cart
  const getTotalPrice = () => {
    const prices = {
      food1: 70,
      food2: 80,
      food3: 60,
      food4: 60,
      food5: 60,
      food6: 70,
    };
    let total = 0;
    for (const food in cart) {
      total += prices[food] * cart[food];
    }
    return total;
  };

  // Function to handle order submission and navigate to SummaryPage
  const handleProceedToPayment = () => {
    const orderDetails = {
      items: cart,
      total: getTotalPrice(),
      time: new Date(),
    };

    // Storing the order details in localStorage or passing via context
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Navigate to SummaryPage
    navigate("/summary");
  };

  return (
    <div className="food-page">
      <div className="food-items">
        {/* Food Item 1 */}
        <div className="food-item">
          <img src={food1} alt="French Fries" />
          <h3>French Fries</h3>
          <p>₹70</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food1", "remove")}>-</button>
            <span>{cart.food1 || 0}</span>
            <button onClick={() => handleAddRemove("food1", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 2 */}
        <div className="food-item">
          <img src={food2} alt="Roll" />
          <h3>Roll</h3>
          <p>₹80</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food2", "remove")}>-</button>
            <span>{cart.food2 || 0}</span>
            <button onClick={() => handleAddRemove("food2", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 3 */}
        <div className="food-item">
          <img src={food3} alt="Sandwich" />
          <h3>Sandwich</h3>
          <p>₹60</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food3", "remove")}>-</button>
            <span>{cart.food3 || 0}</span>
            <button onClick={() => handleAddRemove("food3", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 4 */}
        <div className="food-item">
          <img src={food4} alt="Fried Rice" />
          <h3>Fried Rice</h3>
          <p>₹60</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food4", "remove")}>-</button>
            <span>{cart.food4 || 0}</span>
            <button onClick={() => handleAddRemove("food4", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 5 */}
        <div className="food-item">
          <img src={food5} alt="Burger" />
          <h3>Burger</h3>
          <p>₹60</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food5", "remove")}>-</button>
            <span>{cart.food5 || 0}</span>
            <button onClick={() => handleAddRemove("food5", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 6 */}
        <div className="food-item">
          <img src={food6} alt="Momos" />
          <h3>Momos</h3>
          <p>₹70</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food6", "remove")}>-</button>
            <span>{cart.food6 || 0}</span>
            <button onClick={() => handleAddRemove("food6", "add")}>+</button>
          </div>
        </div>
      </div>

      {/* Cart Summary Section */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Total: ₹{getTotalPrice()}</p>
        <button onClick={handleProceedToPayment}>Proceed to Payment</button>
      </div>
    </div>
  );
}

export default FourPage;
