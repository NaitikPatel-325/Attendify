const con = require('./db/dbconnector');

module.exports = function register(eventName,description,startDate,endDate,club, callback) {
    let checkIfExistsSQL = `SELECT * FROM events WHERE name = ?`;
    con.query(checkIfExistsSQL, [eventName], (error, results) => {
        if (error) {
            console.log("Error: " + error.message);
            throw error;
        }                   
        console.log(results);
        if (results.length > 0) {
            callback("Event already exists", null);
        } else {
            let insertUserSQL = `INSERT INTO events (name,description,startDate,endDate,club) VALUES (?,?,?,?,?)`;
            con.query(insertUserSQL, [eventName,description,startDate,endDate,club], (insertError, insertResults) => {
                if (insertError) {
                    console.log("Error inserting event: " + insertError.message);
                    callback(insertError.message, null);
                } else {
                    console.log("Event registered successfully: " + eventName);
                    console.log(insertResults);  
                    callback(null, insertResults);  
                }
            });
        }
    });
};
