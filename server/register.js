const con = require('./db/dbconnector');

module.exports = function register(username, password, email, userType, callback) {
    let checkIfExistsSQL = `SELECT * FROM Users WHERE username = ?`;
    con.query(checkIfExistsSQL, [username], (error, results) => {
        if (error) {
            console.log("Error: " + error.message);
            // throw error;
        }                   
        // console.log(results);
        if (results.length > 0) {
            callback("User already exists", null);
        } else {
            let insertUserSQL = `INSERT INTO Users (username, password, email , type) VALUES (?,?,?,?)`;
            con.query(insertUserSQL, [username, password, email, userType], (insertError, insertResults) => {
                if (insertError) {
                    console.log("Error inserting user: " + insertError.message);
                    callback(insertError.message, null);
                } else {
                    console.log("User registered successfully: " + username);
                    // console.log(insertResults);  
                    callback(null, insertResults);  
                }
            });
        }
    });
};
