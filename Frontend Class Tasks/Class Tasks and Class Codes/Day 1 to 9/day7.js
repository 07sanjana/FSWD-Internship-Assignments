// What is the difference between a variable and an array?
// A variable is a single storage location that can hold a value, 
// while an array is a collection of multiple values stored in a single variable. 
// Variables can hold different types of data, such as numbers, strings, or booleans, 
// while arrays can hold multiple values of the same or different types. 
// Arrays also have built-in methods for manipulating and accessing their elements, 
// while variables do not have these capabilities.

// How do you store multiple values of multiple values?
// Lists, Objects, Arrays

// Arrays strores multiple values.
// Objects are those which store structured data (key value pairs)

// Arrays: Stores multiple values in a single variable.

let fruits = ["apple", "banana", "orange"];
// console.log(fruits);

// // Accessing array elements
// console.log(fruits[1]); // Output: "banana"

// To modify the array
// fruits[0] = "grape";
// console.log(fruits); // Output: ["grape", "banana", "orange"]

// Properties and methods of arrays
// Length property
// console.log(fruits.length); // Output: 3

// Push method - adds an element to the end of the array
// fruits.push("grape");
// console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// Pop method - removes the last element from the array
// fruits.pop();
// console.log(fruits); // Output: ["apple", "banana", "orange"]

// Shift method - removes the first element from the array
// fruits.shift();
// console.log(fruits); // Output: ["banana", "orange"]

// Unshift method - adds an element to the beginning of the array
// fruits.unshift("grape");
// console.log(fruits); // Output: ["grape", "apple", "banana", "orange"]

// Loops and arrays
// for (let i = 0; i < fruits.length; i+=1) {
//     console.log(fruits[i]);
// }

// Modern way to loop through arrays using for...of loop
// for (let fruit of fruits) {
    // console.log(fruit);
// }

// To add or delete elements from a specific index, we can use the splice method
// fruits.splice(1, 1); // Removes 1 element at index 1
// console.log(fruits); // Output: ["apple", "orange"]
// array.splice(startindex, deleteCount, item1, item2, ...)
// fruits.splice(1, 0, "grape"); // Adds "grape" at index 1 without deleting any element
// console.log(fruits); // Output: ["apple", "grape", "banana", "orange"]
// Replacing an element at a specific index
// fruits.splice(1, 1, "grape"); // Replaces 1 element at index 1 with "grape"
// console.log(fruits); // Output: ["apple", "grape", "banana", "orange"]

// Insert multiple elements at a specific index
// fruits.splice(1, 0, "grape", "kiwi");
// console.log(fruits); // Output: ["apple", "grape", "kiwi", "banana", "orange"]

// Differende between splice and slice
// splice() - modifies original array
// slice() - does not modify original array, returns a new array















