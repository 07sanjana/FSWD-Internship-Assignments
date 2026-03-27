const express = require("express");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.use("/api/students", studentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running for assignment-19-03-26 on port ${PORT}`);
});