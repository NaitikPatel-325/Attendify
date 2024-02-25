const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "attendify"
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
