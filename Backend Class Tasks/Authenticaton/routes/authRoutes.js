const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

// Middleware imports
const { authMiddleware, authorizeRole } = require("../middleware/authMiddleware");

const router = express.Router();

// SIGNUP ROUTE

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({
            name,
            email,
            password: hashedPassword,
            role: "user", // Default role
        });

        await user.save();

        res.json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

// LOGIN ROUTE

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // 3. Generate JWT
        const token = jwt.sign(
            { id: user._id, role: user.role },
            "secretkey",
            { expiresIn: "1h" }
        );

        res.json({ token });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

// PROTECTED ROUTE 

router.get("/dashboard", authMiddleware, (req, res) => {
    res.json({
        msg: "Welcome to Dashboard",
        user: req.user,
    });
});

// ADMIN ROUTE

router.get(
    "/admin",
    authMiddleware,
    authorizeRole("admin"),
    (req, res) => {
        res.json({
            msg: "Welcome Admin",
            user: req.user,
        });
    }
);

// EXPORT ROUTER

module.exports = router;
