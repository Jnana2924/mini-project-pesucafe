import React, { useState, useEffect } from "react";
import "../components/Cart.css"; // Import the shared CSS for background, etc.

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch the cart from localStorage or state (you could use context or Redux if needed)
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
    const total = savedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, []);

  const handleProceedToPayment = () => {
    // Logic for proceeding to payment
    alert("Proceeding to payment...");
  };

  return (
    <div className="app">
      {/* Background image for Cart Page */}
      <div className="background"></div>

      {/* Transparent box for Cart summary */}
      <div className="cart-summary">
        <h3>Your Cart</h3>
        <div>
          {cartItems.length === 0 ? (
            <p>No items in the cart.</p>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h4>Total: ₹{totalPrice}</h4>
        </div>

        <button className="btn" onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default Cart;
