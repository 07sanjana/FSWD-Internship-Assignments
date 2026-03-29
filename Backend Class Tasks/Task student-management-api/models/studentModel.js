// In-memory storage for students
let students = [];
let currentId = 1;

module.exports = {
    students,
    getNextId: () => currentId++,
};