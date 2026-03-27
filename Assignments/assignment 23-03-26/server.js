const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Hello! Welcome to the Hello Server Home Page.");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About page of the Hello Server.");
});

// Contact route
app.get("/contact", (req, res) => {
    res.send("Contact us at hello@server.com");
});

// Server listening
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});