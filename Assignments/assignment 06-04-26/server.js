const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const verifyToken = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", authRoutes);


// Protected Route
app.get("/api/profile", verifyToken, (req, res) => {
  res.json({
    message: "This is a protected route",
    userId: req.userId
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});