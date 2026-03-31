const express = require('express');

const bookRoutes = require('./routes/books');
const authorRoutes = require('./routes/authors');

const app = express();

app.use(express.json());   // VERY IMPORTANT

app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});