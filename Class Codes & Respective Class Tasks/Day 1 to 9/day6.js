// Control Flow
// console.log("start");
// console.log("middle");
// console.log("end");

// Conditional statements
// If statement
// let age = 20;
// if (age >= 18) {
//     console.log("You are an adult.");
// }

// // If-else statement
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// let age = 20; //changeable variable
// const b = 5; //not changable variable

// If else ladder
// let score = 85;
// if (score >= 90) {
//     console.log("Grade: A");
// } else if (score >= 80) {
//     console.log("Grade: B");
// } else if (score >= 70) {
//     console.log("Grade: C");
// } else if (score >= 60) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }

// == (equally) only value is considered
// === (strictly equal) value and type are considered
// Check if the number is even or odd
// let number = 10;
// if (number % 2 === 0) {
//     console.log("The number is even.");
// } else {
//     console.log("The number is odd.");
// }

// Loops
// For loop
// Start 1, run until 5, increment by 1
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// While loop
// let j = 1;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }

// Nested loop for pattern printing
// for (let i = 1; i <= 5; i++) {
//     let stars = "";
//     for (let j = 1; j <= i; j++) {
//         stars += "* ";
//     }
//     console.log(stars);
// }

// Break and continue
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         break; // Exit the loop when i is 5
//     }
//     console.log(i);
// }   

// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue; // Skips only the iteration when i is 5
//     }
//     console.log(i);
// }   

// Code to print the table of 7
// let n = 7;
// for( let i = 1; i <= 10; i++) {
//     console.log(n,"*",i,"=",n*i);
// }

// Functions
// Fucntion without return
// function greet(name) {
//     console.log("Hello, ", name);
// }
// // Function with return
// function add(a, b) {
//     return a + b;
// }
// greet("Alice");
// let sum = add(5, 10);
// console.log("Sum: ", sum);

// Arrow function
// const multiply = (a, b) => a * b;
// let product = multiply(5, 10);
// console.log("Product: ", product);

// OR IT CAN ALSO BE WRITTEN AS

// const multiply = (a, b) => {
//     return a * b;
// }
// let product = multiply(5, 10);
// console.log("Product: ", product);



// Class task
// Build a number analyzer 
// Requirements:
// take a number, check if even or odd
// Print numbers from 1 to that number
// Print square function of that number
// function numberAnalyzer(num) {
//     // Check if even or odd
//     if (num % 2 === 0) {
//         console.log(num, "is an even number.");
//     } else {
//         console.log(num, "is an odd number.");
//     }

//     // Print numbers from 1 to that number
//     console.log("Numbers from 1 to ", num, ":");
//     for (let i = 1; i <= num; i++) {
//         console.log(i);
//     }
    
//     // Print square of the number
//     console.log("Square of", num, "is", num * num);
// }

// // Example usage
// numberAnalyzer(10);
// numberAnalyzer(7);