const con = require('./db/dbconnector')

module.exports = function login(username,password,callback){
    let sql = `SELECT * FROM Users WHERE username = ? AND password = ?`;
    con.query(sql, [username,password], (error, results) => {
        
        if (error){
            console.log("Error: " + error.message);
            
        }
        // console.log(typeof results);
        // console.log(typeof username);
        // console.log(password);
        else{
            if(results.length === 0){
                callback(null,false);
            }
            else{
                // console.log("for user: " + type + "\npassword: " + password);
                console.log(results);
                callback(null,{ans:true,type:results[0]['type']});
            }
        }

        
    })
}