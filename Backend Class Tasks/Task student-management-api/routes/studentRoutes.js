const express = require('express');
const router = express.Router();
const {
    addStudent,
    getAllStudents,
    updateMarks,
    deleteStudent
} = require('../controllers/studentController');

// Add student
router.post('/', addStudent);

// Get all students
router.get('/', getAllStudents);

// Update marks
router.put('/:id/marks', updateMarks);

// Delete student
router.delete('/:id', deleteStudent);

module.exports = router;