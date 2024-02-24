const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Attendify"
});

con.connect(err => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
        throw new Error("Unable to connect to the database");
    } else {
        console.log("Database connected successfully");
    }
});

module.exports = con;
