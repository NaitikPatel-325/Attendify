const mysql = require('mysql');
require("dotenv").config({ path: "config/config.env" });


require('dotenv').config({ path: "../config.env" });

const con = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

con.connect(err => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
        throw new Error("Unable to connect to the database");
        // return;
    } else {
        console.log("Database connected successfully");
    }
});

module.exports = con;
