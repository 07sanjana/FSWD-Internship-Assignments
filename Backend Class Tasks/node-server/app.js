const express = require("express");
const app = express();
const PORT = 3000;

// API data
const students = [
  { name: "Amit", course: "AI" },
  { name: "Riya", course: "FullStack" },
  { name: "Rahul", course: "DataScience" }
];

const courses = ["AI", "ML", "FullStack", "DataScience"];

// API routes
app.get("/students", (req, res) => {
  res.json(students);
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

// Website routes
app.get("/", (req, res) => {
  const now = new Date();
  res.send(`<h1>Welcome to My Website</h1><p>Current Date & Time: ${now}</p>`);
});

app.get("/about", (req, res) => {
  const now = new Date();
  res.send(`<h1>About Us</h1><p>We provide amazing services.</p><p>${now}</p>`);
});

app.get("/services", (req, res) => {
  const now = new Date();
  res.send(`<h1>Our Services</h1><ul><li>Web Development</li><li>AI Solutions</li></ul><p>${now}</p>`);
});

app.get("/contact", (req, res) => {
  const now = new Date();
  res.send(`<h1>Contact Us</h1><p>Email: info@example.com</p><p>Phone: 1234567890</p><p>${now}</p>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});