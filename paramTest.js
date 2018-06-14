var express = require('express');
var app = express();
app.param(function (param, option) {
    return function (req, res, next, val) {
        if (val == option) {
            next(); //
        }
        else {
            res.sendStatus(404);
        }
    }
});
app.param('id', 1337);
app.get('/user/:id', function (req, res) {
    // req,param.id 
    console.log(req.params.id);
    res.send('参数通过检验');
});

app.listen(3000, function () {
    console.log('Ready');
});