const con = require('./db/dbconnector')

module.exports = function fetchevents(callback){
    let sql = `SELECT * FROM Events`;
    con.query(sql, (error, results) => {
        if (error){
            console.log("Error: " + error.message);
        }
        else{
            console.log(results);
            callback(null,results);
        }
    })
}