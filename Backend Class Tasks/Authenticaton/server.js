const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

// Main Route
app.use("/api/auth", authRoutes);

app.listen(3000, () => console.log("Server is running on port 3000"));
