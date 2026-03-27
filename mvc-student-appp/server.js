const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

// Custom logger middleware
app.use(logger);

// Student routes
app.use('/students', studentRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Student MVC API is running...');
});
// Error handling middleware
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
