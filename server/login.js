const con = require('./db/dbconnector')

module.exports = function login(username,password,callback){
    let sql = `SELECT * FROM Users WHERE username = ? AND password = ?`;
    con.query(sql, [username,password], (error, results) => {
        if (error){
            console.log("Error: " + error.message);
            throw error;
        }
        else{
            console.log("for user: " + username + "\npassword: " + password);
            let jsonResultSet = JSON.parse(JSON.stringify(results));
            console.log(jsonResultSet[0]);
            callback(null,jsonResultSet[0]);
        }
    })
}