const Student = require("../models/Student");


// CREATE
exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.json(savedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// READ
exports.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};


// READ BY ID
exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};


// UPDATE
exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(student);
};


// DELETE
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted successfully" });
};