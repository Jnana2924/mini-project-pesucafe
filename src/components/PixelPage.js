import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/4.css";
import food13 from "../assets/food13.jpg"; // Chicken Shawarma
import food14 from "../assets/food14.jpg"; // Chicken Biryani
import food15 from "../assets/food15.jpg"; // Ice Cream
import food16 from "../assets/food16.jpg"; // Lemon Chicken
import food17 from "../assets/food17.jpg"; // Fresh Fruit Juice
import food18 from "../assets/food18.jpg"; // Chole Bhature

function PixelPage() {
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
      food13: 150,  // Chicken Shawarma
      food14: 220,  // Chicken Biryani
      food15: 100,  // Ice Cream
      food16: 180,  // Lemon Chicken
      food17: 120,  // Fresh Fruit Juice
      food18: 180,  // Chole Bhature
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
      <div className="food-items">
        {/* Food Item 13 */}
        <div className="food-item">
          <img src={food13} alt="Chicken Shawarma" />
          <h3>Chicken Shawarma</h3>
          <p>₹150</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food13", "remove")}>-</button>
            <span>{cart.food13 || 0}</span>
            <button onClick={() => handleAddRemove("food13", "add")}>+</button>
          </div>
        </div>
        {/* Food Item 14 */}
        <div className="food-item">
          <img src={food14} alt="Chicken Biryani" />
          <h3>Chicken Biryani</h3>
          <p>₹220</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food14", "remove")}>-</button>
            <span>{cart.food14 || 0}</span>
            <button onClick={() => handleAddRemove("food14", "add")}>+</button>
          </div>
        </div>
        {/* Food Item 15 */}
        <div className="food-item">
          <img src={food15} alt="Ice Cream" />
          <h3>Ice Cream</h3>
          <p>₹100</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food15", "remove")}>-</button>
            <span>{cart.food15 || 0}</span>
            <button onClick={() => handleAddRemove("food15", "add")}>+</button>
          </div>
        </div>
        {/* Food Item 16 */}
        <div className="food-item">
          <img src={food16} alt="Lemon Chicken" />
          <h3>Lemon Chicken</h3>
          <p>₹180</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food16", "remove")}>-</button>
            <span>{cart.food16 || 0}</span>
            <button onClick={() => handleAddRemove("food16", "add")}>+</button>
          </div>
        </div>
        {/* Food Item 17 */}
        <div className="food-item">
          <img src={food17} alt="Fresh Fruit Juice" />
          <h3>Fresh Fruit Juice</h3>
          <p>₹120</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food17", "remove")}>-</button>
            <span>{cart.food17 || 0}</span>
            <button onClick={() => handleAddRemove("food17", "add")}>+</button>
          </div>
        </div>
        {/* Food Item 18 */}
        <div className="food-item">
          <img src={food18} alt="Chole Bhature" />
          <h3>Chole Bhature</h3>
          <p>₹180</p>
          <div className="quantity">
            <button onClick={() => handleAddRemove("food18", "remove")}>-</button>
            <span>{cart.food18 || 0}</span>
            <button onClick={() => handleAddRemove("food18", "add")}>+</button>
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

export default PixelPage;
