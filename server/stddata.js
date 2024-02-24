const con = require('./db/dbconnector');

module.exports = function stddata(username,callback) {
    let query1 = `SELECT name from events`;
    con.query(query1, [], (error,result) => {
        if(error){
            console.log("Error: " + error.message);
            throw error;
        }
        else{
            console.log("Fetching data for user: " + username);
            result = JSON.parse(JSON.stringify(result));
            let stdevents = [];
            if(result.length == 0){
                callback("no events in table.",null);
            }
            // console.log(result);

            let i = 0;

            function callback2 (eventname,callback3){
                // console.log("inside callback2");
                // console.log("user: " + username, "event: " + eventname);
                let query2 = "SELECT * from `"+eventname+"` WHERE `username` = '"+username+"';";
                con.query(query2, [], (error2,result2) => {
                    // console.log(eventname);
                    if(error2){
                        console.log("Error: " + error2.message);
                        // throw error2;
                        callback3(true,null);
                    }
                    else{
                        if(result2.length != 0){
                            // console.log(result2);
                            callback3(null,true)
                        }
                        else{
                            // console.log(result2);
                            callback3(true,null)
                        }
                    }
                })
            }

            function callback3(err,data){
                // console.log("in callback 3",data);
                if(err){
                    // console.log(err);
                    // callback(err,null);  
                }
                else{
                    // console.log(data);
                    stdevents.push(result[i]);
                }
                i++;
                if(i < result.length){
                    callback2(result[i].name,callback3);
                }
                else{
                    // console.log(stdevents);
                    callback(null,stdevents)
                }
            }

            callback2(result[i].name,callback3);
             
        }
    })
}