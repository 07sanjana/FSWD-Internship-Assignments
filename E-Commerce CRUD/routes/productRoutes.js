const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Create Project
router.post("/", async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all products + filter by category
router.get("/", async (req, res) => {
    try {
        
    }
})