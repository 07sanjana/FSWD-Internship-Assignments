// creating first express server
const express = require('express');
const userRoutes = require('./routes/UserRoutes');
const logger = require('./middleware/logger');
const app = express();
const PORT = 3000;

app.use(logger); // using the logger middleware

/*
app.get('/', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});
app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/users/', (req, res) => {
    const users = [
        { id: 1, name: 'zeha' },
        { id: 2, name: 'cyan' },
        { id: 3, name: 'aaron' },
        { id: 4, name: 'khlora' },
    ];
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
*/ 

app.use('/users', userRoutes); // using the user routes

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
