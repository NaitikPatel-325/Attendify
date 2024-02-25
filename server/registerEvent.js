
    const con = require('./db/dbconnector');
    
    module.exports = function register(eventName,description,startDate,endDate,Location,club, callback) {
        console.log(eventName,description,startDate,endDate,Location,club, callback);
        let checkIfExistsSQL = `SELECT * FROM events WHERE name = ?`;
        con.query(checkIfExistsSQL, [eventName], (error, results) => {
            if (error) {
                console.log("Error: " + error.message);
                throw error;
            }                   
            // console.log(results);
            if (results.length > 0) {
                callback("Event already exists", null);
            } else {
                let insertUserSQL = "INSERT INTO events (name,description,startDate,endDate,Location,club) VALUES (?,?,?,?,?,?);";
                con.query(insertUserSQL, [eventName,description,startDate,endDate,Location,club], (insertError, insertResults) => {
                    // console.log(insertUserSQL);
                    if (insertError) {
                        console.log("Error inserting event: " + insertError.message);
                        callback(insertError.message, null);
                    } else {
                        let newTableQuery = " CREATE TABLE " + eventName + " (`username` varchar(20),`attended` boolean DEFAULT false,FOREIGN KEY (username) REFERENCES users(username));";
                        con.query(newTableQuery, [], (error,result) => {
                            if (error) {
                                console.log("Error inserting event: " + error.message);
                                callback(error.message, null);
                            }
                            else{
                                console.log("Event registered successfully: " + eventName);
                                console.log(result);  
                                callback(null, result);  
                            }
                        })
                    }
                });
            }
        });
    };

