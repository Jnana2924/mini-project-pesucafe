const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/foodCart", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Cart Schema and Model
const cartSchema = new mongoose.Schema({
  food: String, // Food item name
  quantity: Number, // Quantity
  price: Number, // Price per unit
});

const Cart = mongoose.model("Cart", cartSchema);

// API Endpoints

// Get Cart Data
app.get("/cart", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart data:", error);
    res.status(500).json({ error: "Failed to fetch cart data" });
  }
});

// Add/Update Cart Item
app.post("/update-cart", async (req, res) => {
  const { food, action, price } = req.body;

  try {
    let cartItem = await Cart.findOne({ food });

    if (cartItem) {
      // Update existing item
      if (action === "add") {
        cartItem.quantity++;
      } else if (action === "remove" && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
      await cartItem.save();
    } else if (action === "add") {
      // Add new item
      cartItem = new Cart({ food, quantity: 1, price });
      await cartItem.save();
    }

    res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ error: "Failed to update cart" });
  }
});

// Clear Cart (Optional)
app.delete("/clear-cart", async (req, res) => {
  try {
    await Cart.deleteMany({});
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ error: "Failed to clear cart" });
  }
});

// Token Generation Endpoint
// Token Generation Endpoint
app.get("/generate-token", (req, res) => {
  try {
    const token = `TOKEN-${Math.floor(Math.random() * 1000000)}`; // Random token number
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error generating token:", error);
    res.status(500).json({ error: "Failed to generate token" });
  }
});

// Start the Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
