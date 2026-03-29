const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require("mongoose");
const connectDB = async() => {
    try {
        // secret in whatsapp
        console.log("MongoDB is successfully connected.");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
module.exports = connectDB;