const con = require('./db/dbconnector')

module.exports = function (events,club,callback){
    let query1 = "SELECT * FROM `events` WHERE `club` = ?";
    con.query(query1,[club.username],(err,res) => {
        if(err){
            console.log("Error:" + err.message);
            throw err;
        }
        else{
            res = JSON.parse(JSON.stringify(res));
            res = res.map((event,i) => (event.name));
            console.log(res);
            callback(res,null);
        }
    })
}