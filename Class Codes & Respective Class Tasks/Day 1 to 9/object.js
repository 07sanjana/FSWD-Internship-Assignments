// Objects - store structured data in key-value pairs
// let student = {
//     name: "Sandhya",
//     age: 20,
//     course: "Computer Science",
// };
// console.log(student);

// Accessing object properties - dot notation
// console.log(student.name); // Output: "Sandhya"
// console.log(student["age"]); // Output: 20


// Accessing object properties - bracket notation
// console.log(student["course"]); // Output: "Computer Science"

// // Modifying object properties
// student.age = 21;
// student.city = "Bengaluru"; // Adding a new property
// console.log(student); // Output: { name: "Sandhya", age: 21, course: "Computer Science" }

// // Loops and objects
// for (let key in student) {
//     console.log(key + ": " + student[key]);
// }


// -----------------------------------------------------------------------------------------------
// Common JS Methods
// map() - transforms the data
// let num = [1, 2, 3, 4, 5];
// let doubled = num.map(function (num) {
//     return num * 2;
// });
// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// filter() - filters the data based on a condition
// let even = num.filter(function (num) {
//     return num % 2 === 0;
// });
// console.log(even); // Output: [2, 4]

// reduce() - reduces the array to a single value
// let sum = num.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);
// console.log(sum); // Output: 15
// How it works
// Step 1: accumulator = 0, currentValue = 1, returns 0 + 1 = 1
// Step 2: accumulator = 1, currentValue = 2, returns 1 + 2 = 3
// Step 3: accumulator = 3, currentValue = 3, returns 3 + 3 = 6
// Step 4: accumulator = 6, currentValue = 4, returns 6 + 4 = 10
// Step 5: accumulator = 10, currentValue = 5, returns 10 + 5 = 15

// find() - returns the first element that satisfies a condition
// let found = num.find(function (num) {
//     return num > 3;
// });
// console.log(found); // Output: 4

// includes() - checks if an element is present in the array
// let hasThree = num.includes(3);
// console.log(hasThree); // Output: true


//------------------------------------------------
// Solving a question
// Problems
// let students = [
//     { name: "aman", marks: 85 },
//     { name: "riya", marks: 92 },
//     { name: "john", marks: 60 },
//     { name: "joe", marks: 78 },
// ];

// 1. Get students who scored more than 80 marks
// let toppers = students.filter(function (student) {
//     return student.marks > 80;
// });
// console.log(toppers); // Output: [{ name: "aman", marks: 85 }, { name: "riya", marks: 92 }}

// 2. Get only the names of the students
// let names = students.map(function (student) {
//     return student.name;
// });
// console.log(names); // Output: ["aman", "riya", "john", "joe"]

// 3. Get the total marks of all students
// let totalMarks = students.reduce(function (accumulator, student) {
//     return accumulator + student.marks;
// }, 0);
// console.log(totalMarks); // Output: 315

// Methods are built-in functions that perform specific tasks on data structures like arrays and objects. 
// They help us manipulate and transform data efficiently.




