const jwt = require("jsonwebtoken");

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ msg: "No token, access denied" });
    }

    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ msg: "Invalid token" });
    }
};

// Role Authorization
const authorizeRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.status(403).json({ msg: "Access denied" });
        }
        next();
    };
};

module.exports = { authMiddleware, authorizeRole };