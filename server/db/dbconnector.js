const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Attendify"
});

con.connect(err => {
    if(err){
        console.log("Error: " + err.message);
        process.exit(500);
    }
    else
        console.log("database connected successfully");
})

module.exports = con;