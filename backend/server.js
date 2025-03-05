require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Connection Error ❌", err));

// Home route with DB connection status
app.get("/", (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
  res.json({ message: "Welcome to ASAP Project!", database_status: dbStatus });
});

// Existing /ping route
app.get("/ping", (req, res) => {
  res.send("pong");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});