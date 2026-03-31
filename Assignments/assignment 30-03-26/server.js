const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/User');

const app = express();
app.use(express.json());

mongoose.connect("") // Replace with your MongoDB Atlas connection string (end the string with 'blogDB')
.then(async () => {
    console.log("MongoDB Atlas Connected");

    // Insert sample user
    const user = new User({
        username: "zeha",
        email: "zeha@email.com",
        password: "123456"
    });

    await user.save();
    console.log("Sample user inserted");
})
.catch(err => console.log(err));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});