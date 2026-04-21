const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "" // Link to your MongoDB database goes here
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;