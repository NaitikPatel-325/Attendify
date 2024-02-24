const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


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

app.post('/loggedin', (req,res) => {
    // console.log("on loggedin page...");
    const {username,password} = req.body;
    // console.log(username,password);
    login(username,password,(err,data) => {
        if(err){
            console.log(err);
            res.body = {"Error message": err}
        }
        else{
            console.log(data);
            if(req.session.data){
                res.body = {"result": "your old session."};
            }
            else{
                req.session.data = data;
                res.setHeader('Content-Type','application/json')
                res.body = data;
                console.log(res.body);
            }
        }
        res.send(res.body);
    })
    
})

app.post('/registers', (req, res) => {
    console.log("on Register page...");
    console.log(req.body);
    const { email, password,username } = req.body;
    // console.log(email, password,userType);
    register(username,password,email,(err,data) => {
        if(err){
            console.log(err);
            res.body = {"Error message": err}
        }
        else{
            console.log(data);
            if(req.session.data){
                res.body = {"result": "your old session."};
            }
            else{
                req.session.data = data;
                res.setHeader('Content-Type','application/json')
                res.body = data;
                console.log("hi");
                console.log(res.body);
            }
        }
        res.send(res.body);
    });
});


app.post('/register_student', (req,res) => {

})

app.post('/get_student_data', (req,res) => {

})

app.get('/events', (req,res) => {
    console.log("on events page...");
    res.send("on events page");
})

app.get('/events/:event', (req,res) => {

})

app.post('/register_in_event', (req,res) => {

})

app.post('/admin_login', (req,res) => {

})

app.post('/register_event', (req,res) => {

})


const PORT = 5000;
app.listen(PORT, () => {
    console.log("server started on port:" + PORT);
})