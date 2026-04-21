const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

const verifyToken = (req, res, next) => {

  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "Token required" });
  }

  try {

    const decoded = jwt.verify(token, SECRET);

    req.userId = decoded.id;

    next();

  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;