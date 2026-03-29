const express = require('express');

const app = express();
const PORT = 3000;

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});

app.get('/about', (req, res) => {
    res.send('This is About Page');
});

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

// 404 Route Handler
app.use((req, res) => {
    res.status(404).send('Page Not Found');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});