const { students, getNextId } = require('../models/studentModel');

// Add new student
const addStudent = (req, res) => {
    const { name, email, course, marks } = req.body;
    if (!name || !email || !course || marks === undefined) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const student = { id: getNextId(), name, email, course, marks };
    students.push(student);
    res.status(201).json(student);
};

// Get all students
const getAllStudents = (req, res) => {
    res.json(students);
};

// Update marks
const updateMarks = (req, res) => {
    const id = parseInt(req.params.id);
    const { marks } = req.body;
    const student = students.find(s => s.id === id);
    if (!student) return res.status(404).json({ message: 'Student not found' });
    student.marks = marks;
    res.json(student);
};

// Delete student
const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) return res.status(404).json({ message: 'Student not found' });
    const removed = students.splice(index, 1);
    res.json({ message: 'Student deleted', student: removed[0] });
};

module.exports = { addStudent, getAllStudents, updateMarks, deleteStudent };