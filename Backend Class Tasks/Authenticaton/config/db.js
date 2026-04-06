const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(""); // Within brackets add mongodb atlas connectio string
    console.log("MongoDB Connected");
};

module.exports = connectDB;