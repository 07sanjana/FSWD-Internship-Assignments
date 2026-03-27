const studentModel = require("../models/studentModel");

exports.getStudents = (req, res) => {
  const students = studentModel.getAllStudents();

  res.status(200).json({
    success: true,
    data: students
  });
};

exports.getStudent = (req, res) => {
  const id = parseInt(req.params.id);

  const student = studentModel.getStudentById(id);

  if (!student) {
    return res.status(404).json({
      success: false,
      message: "Student not found"
    });
  }

  res.status(200).json({
    success: true,
    data: student
  });
};