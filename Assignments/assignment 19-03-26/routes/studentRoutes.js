const express = require("express");
const controller = require("../controllers/studentController");

const router = express.Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudent);

module.exports = router;