const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Define a sample schema for cat-mobiles
const CatCarSchema = new mongoose.Schema({
  name: String,
  model: String,
  color: String,
  features: [String],
});

const CatCar = mongoose.model("CatCar", CatCarSchema);

// ✅ CREATE - Add a new cat-mobile
router.post("/catcars", async (req, res) => {
  try {
    const newCar = new CatCar(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: "Failed to create car" });
  }
});

// ✅ READ - Get all cat-mobiles
router.get("/catcars", async (req, res) => {
  try {
    const cars = await CatCar.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

// ✅ READ - Get a specific cat-mobile by ID
router.get("/catcars/:id", async (req, res) => {
  try {
    const car = await CatCar.findById(req.params.id);
    if (!car) return res.status(404).json({ error: "Car not found" });
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch car" });
  }
});

// ✅ UPDATE - Update a cat-mobile by ID
router.put("/catcars/:id", async (req, res) => {
  try {
    const updatedCar = await CatCar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCar) return res.status(404).json({ error: "Car not found" });
    res.json(updatedCar);
  } catch (error) {
    res.status(500).json({ error: "Failed to update car" });
  }
});

// ✅ DELETE - Remove a cat-mobile by ID
router.delete("/catcars/:id", async (req, res) => {
  try {
    const deletedCar = await CatCar.findByIdAndDelete(req.params.id);
    if (!deletedCar) return res.status(404).json({ error: "Car not found" });
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete car" });
  }
});

module.exports = router;