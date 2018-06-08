var express = require("express");
var app = express();

app.get("/",
    function (req, res, next) {
        console.log("call_1")
        next()
    }, function (req, res, next) {
        console.log("call_2");
        next();
    }, function (req, res, next) {
        console.log("call_3")
        next();
    });

app.get("/", function (req, res) {
    console.log("post page")
    res.end()
});

app.listen(3000)