var express = require("express");
var app = express();
var session = require("express-session");

app.use(session({
    secret:"cat",
    resave:false,
    saveUninitialized:true
}));

app.get("/",function(req,res){
    res.send(req.session.username)
})

app.get("/login",function(req,res){
    req.session.login = "1";
    req.session.username = "Kaola"
    res.send("U login success");
})

app.listen(3000);