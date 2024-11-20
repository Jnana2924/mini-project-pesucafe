import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/4.css";
import food19 from "../assets/food19.jpg";
import food20 from "../assets/food20.jpg";
import food21 from "../assets/food21.jpg";
import food22 from "../assets/food22.jpg";
import food23 from "../assets/food23.jpg";
import food24 from "../assets/food24.jpg";

function VakulaPage() {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  // Function to add or remove items from the cart
  const handleAddRemove = (food, operation) => {
    setCart((prevCart) => {
      const currentCount = prevCart[food] || 0;
      const newCount = operation === "add" ? currentCount + 1 : Math.max(currentCount - 1, 0);
      return { ...prevCart, [food]: newCount };
    });
  };

  // Function to calculate the total price of items in the cart
  const getTotalPrice = () => {
    const prices = {
      food19: 150,
      food20: 180,
      food21: 130,
      food22: 140,
      food23: 100,
      food24: 160,
    };
    let total = 0;
    for (const food in cart) {
      total += prices[food] * cart[food];
    }
    return total;
  };

  // Handle proceeding to payment and store order details in localStorage
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
      <div className="food-items">
        {/* Food Item 19 */}
        <div className="food-item">
          <img src={food19} alt="Pizza" />
          <h3>Pizza</h3>
          <p>₹150</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food19", "remove")}>-</button>
            <span>{cart.food19 || 0}</span>
            <button onClick={() => handleAddRemove("food19", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 20 */}
        <div className="food-item">
          <img src={food20} alt="Burger" />
          <h3>South INdian Meals</h3>
          <p>₹180</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food20", "remove")}>-</button>
            <span>{cart.food20 || 0}</span>
            <button onClick={() => handleAddRemove("food20", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 21 */}
        <div className="food-item">
          <img src={food21} alt="Pasta" />
          <h3>Gobi Manchurian</h3>
          <p>₹130</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food21", "remove")}>-</button>
            <span>{cart.food21 || 0}</span>
            <button onClick={() => handleAddRemove("food21", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 22 */}
        <div className="food-item">
          <img src={food22} alt="Fried Rice" />
          <h3>Bisebilebath</h3>
          <p>₹140</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food22", "remove")}>-</button>
            <span>{cart.food22 || 0}</span>
            <button onClick={() => handleAddRemove("food22", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 23 */}
        <div className="food-item">
          <img src={food23} alt="Spring Rolls" />
          <h3>Puliyogare</h3>
          <p>₹100</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food23", "remove")}>-</button>
            <span>{cart.food23 || 0}</span>
            <button onClick={() => handleAddRemove("food23", "add")}>+</button>
          </div>
        </div>

        {/* Food Item 24 */}
        <div className="food-item">
          <img src={food24} alt="Momos" />
          <h3>Vaangibath</h3>
          <p>₹160</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food24", "remove")}>-</button>
            <span>{cart.food24 || 0}</span>
            <button onClick={() => handleAddRemove("food24", "add")}>+</button>
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

export default VakulaPage;
