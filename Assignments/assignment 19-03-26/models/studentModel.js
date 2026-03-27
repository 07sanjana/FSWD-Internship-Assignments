const students = require("../data/students.json");

exports.getAllStudents = () => {
  return students;
};

exports.getStudentById = (id) => {
  return students.find(student => student.id === id);
};