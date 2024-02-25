const express = require('express');
const app = express();

// const formidable = require('express-formidable');
// app.use(formidable());

const cors = require('cors');
app.use(cors({
    
    origin: "http://localhost:5173",
    credentials: true,
}));

// Access-Control-Allow-Origin: http://localhost:3000


const session = require('express-session');
const cookieparser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieparser());
app.use(session({
    secret: "attendify-secret-key",
    saveUninitialized: false,
    resave: false
}));

const login = require('./login');
const register = require('./register');
const registerEvent = require('./registerEvent');
const stddata = require('./stddata');
const fetchevents = require('./fetchevents');
const register_in_event = require('./registerInEvent');
const checkIn = require('./checkin');

app.post('/login', (req,res) => {
    // console.log("on loggedin page...");
    const {username,password} = req.body;
    // console.log(username,password);
    login(username,password,(err,data) => {
        if(err){
            // console.log(err);
            res.body = {"Error message": err}
        }
        else{
            
            // console.log(data);
            if(req.session.data){
                res.body = {"result": "your old session."};
            }
            else{
                if(data===false){
                    res.body = {"ans": "false"};
                }
                else{
                    req.session.data = {username: username};
                    console.log(req.session.data);
                    res.setHeader('Content-Type','application/json')
                    res.body = data;
                    res.body = {"ans": "true"};
                    // console.log(res.body);
                }
            }
        }
        res.send(res.body);
    })
    
})

app.post('/registers', (req, res) => {
    // console.log("on Register page...");
    // console.log(req.body);
    const { email, password, username, userType } = req.body;
    // console.log(email, password,userType);
    register(username,password,email,userType,(err,data) => {
        if(err){
            // console.log(err);
            res.body = {"Error message": err}
        }
        else if(err === "User already exists"){
            res.body = {ans:false}  
        }
        else{
            console.log(data);     
            req.session.data = data;
            res.setHeader('Content-Type','application/json')
            // res.body = {"message":"user created succefully","statusCode":"200","username":username,"userType":userType};
            res.body = {ans:true};
            // console.log("hi");
            // console.log(res.body);
        }
        res.send(res.body);
    });
});


// app.post('/register_student', (req,res) => {

// })

app.post('/get_student_data', (req, res) => {
    
    const data = req.body;
    console.log("getting student data");
    console.log(req.body);
    if (data === undefined) {
        res.body = {Error:"session does not exist."};
        res.send(res.body);
        return;
    }

    console.log("user: " + data.username);
    stddata(data.username, (error, result) => {
        if (error) {
            console.log(error);
            res.status(500).json({"error": error});
        } else {
            // result = result.map(element => {
            //     element.startDate[10] = ' ';
            //     element.endDate[10] = ' ';
            // });
            console.log("result just before sending: " + result.map((event,i) => (event)));
            res.setHeader('Content-Type', 'application/json');
            res.body = { username: data.username, data: result };
        }
        res.send(res.body);
    });
});

// app.get('/events/:event', (req,res) => {

// })

app.post('/register_in_event', (req,res) => {
    console.log("in register event");
    const data = req.body;
    if(data === undefined || data.username === undefined || data.eventname === undefined){
        res.send("Error, session does not exist.")
        return;
    }
    console.log("for user: " + data.username);
    console.log("in event: " + data.eventname);
    res.setHeader('Content-Type', 'application/json');
    register_in_event(data.username,data.eventname,(err,result) => {
        if(err){
            console.log("Error registering in event: " + err);

            res.body = {"status":"Error"};
            // throw err;
        }
        else{
            console.log("user: "+data.username+" registered in the event: " + data.eventname);
            res.body = {"status":"successfully registered in the event."};
        }
        // console.log(res.body);
        res.send(res.body);
    })
})

app.post('/fetchevent', (req,res) => {
    console.log("fetching the events..");
    fetchevents((error,data) => {
        if(error){
            // console.log(error);
            res.body = { "Error in fetching event":error };
        }
        else{
            res.setHeader('Content-Type','application/json')
            res.body = data;
            // console.log(res.body);
        }
        res.send(res.body);
        })
})

app.post('/register_event', (req,res) => {
    console.log("registering the new event..");
    const {eventName,description,startDate,endDate,Location,club} = req.body;
    // console.log(eventName,description,startDate,endDate,Location,club);
    registerEvent(eventName,description,startDate,endDate,Location,club,(error,data) => {
        if(error){
            console.log(error);
            res.body = { "Error in registering event":error };
        }
        else{
            res.setHeader('Content-Type','application/json')
            res.body = {"message":"Event created succefully","statusCode":"200","Eventname":eventName,"Club":club};
            // console.log("hi");i am naitk bhat
            console.log(res.body);
        }
        res.send(res.body);
    })
    // console.log(req.fields);
    // console.log(req.files);
    // res.send();

})

app.post('/checkin', (req,res) => {
    console.log(req.body);
    // console.log(req.params);
    // console.log(req.query);
    let events = req.query.events;
    // console.log(events);
    events = events.split(',');
    console.log(events);
    checkIn(events,req.body,(err,result) => {
        if(err){
            res.body = {error:err};
        }
        else{
            res.body = {result};
        }
        res.send(res.body);
    })
    // checkIn()
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log("server started on port:" + PORT);
})