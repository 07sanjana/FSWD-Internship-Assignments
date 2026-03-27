const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require("mongoose");
const connectDB = async() => {
    try {
        await mongoose.connect("mongodb+srv://sanjanamadhu19_db_user:Chintu19@cluster0.zt4jdff.mongodb.net/");
        console.log("MongoDB is successfully connected.");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
module.exports = connectDB;