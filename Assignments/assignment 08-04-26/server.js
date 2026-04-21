const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const verifyToken = require("./middleware/authMiddleware");
const checkRole = require("./middleware/roleMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api", authRoutes);


// USER ROUTE
app.get("/api/user", verifyToken, (req, res) => {
  res.json({ message: "Welcome User" });
});


// ADMIN ROUTE
app.get(
  "/api/admin",
  verifyToken,
  checkRole("admin"),
  (req, res) => {
    res.json({ message: "Welcome Admin" });
  }
);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});