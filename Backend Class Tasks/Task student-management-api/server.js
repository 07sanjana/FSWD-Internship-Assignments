const express = require('express');
const app = express();
app.use(express.json());

const studentRoutes = require('./routes/studentRoutes');

app.use('/students', studentRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));