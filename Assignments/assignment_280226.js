// Array of student objects
let students = [
  {
    name: "Rahul",
    marks: [85, 78, 92]
  },
  {
    name: "Priya",
    marks: [88, 90, 79]
  },
  {
    name: "Arjun",
    marks: [70, 75, 80]
  }
];

// Function to calculate average
function calculateAverage(marks) {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  return sum / marks.length;
}

// Display student averages
for (let i = 0; i < students.length; i++) {
  let student = students[i];
  let avg = calculateAverage(student.marks);

  console.log("Student:", student.name);
  console.log("Marks:", student.marks);
  console.log("Average:", avg);
  console.log("------------------");
}