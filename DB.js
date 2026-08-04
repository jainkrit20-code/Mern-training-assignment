const dns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"]);
const mongoose = require('mongoose');
const { connect } = require('node:http2');
const url = "mongodb+srv://jainkrit20_db_user:ylX83uNebSw16ZWK@cluster0.r20udxv.mongodb.net/Assignment1";

const connectDB = async () => {
    await mongoose.connect(url);
    console.log("database connection established")
};

module.exports = connectDB;