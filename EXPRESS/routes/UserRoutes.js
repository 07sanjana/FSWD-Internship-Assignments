const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const users = [
        { id: 1, name: "zeha", dept: "CSE" },
        { id: 2, name: "cyan", dept: "ECE" }
    ]
    res.json(users);
});

router.get("/:_id", (req, res) => {
    res.send(`User ID is: ${req.params._id}`);
});

module.exports = router;
