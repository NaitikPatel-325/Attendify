const con = require('./db/dbconnector');

module.exports = function register_in_event(username,eventName,callback){
    let query = "SELECT * FROM `"+eventName+"` WHERE `username` = '" + username + "';";
    con.query(query,[],(err,res) => {
        if(err){
            console.log("Error: " + err.message);
            throw err;
            // callback(err.message,null);
            // return;
        }
        else if(res.length > 0){
            console.log("user has already registered.");
            callback("user has already registered.",null);
        }
        else{
            let query2 = "INSERT INTO `"+eventName+"`(`username`) VALUES ('"+username+"');";
            con.query(query2,[],(err2,res2) => {
                if(err2){
                    console.log("Insertion error: "+err2.message);
                    throw err2;
                    callback(true,null);
                }
                else{
                    console.log("user registered in event successfully.");
                    callback(null,true);
                }
            })
        }
    })
}