var Promise = require("bluebird")
var fs = require("fs")
// console.log(Promise.promisify.toString())
// var readFileAsync = Promise.promisify(fs.readFile);
// var readFileCAsync = Promise.promisify(fs.readFileSync);

// function fn() {
//     return('call fn')
// }

// function fnWithout(err,){
//     return 'call fnWithout'
// }

// var fn = Promise.promisify(fn);
// var fnWithout = Promise.promisify(fnWithout);

// fn.then(function(data){
//     console.log(data)
// })
// fnWithout.then(function(data) {
//     console.log(data)
// })
// Promises.promisifyAll(fs);

// fs.readFileAsync("./file/read", "utf8").then(function(d1,d2){
//     console.log(d1.toString());
// })
// fs.readFileAsync("./file/read","utf8").then(function(d1,d2){
//     console.log(d1.toString());
// })
// fs.readFileSync("./file/read").then()
// readFileCAsync("./file/read").then(function(d1,d2){
//     console.log(d1.toString());
// })
// readFileAsync("./package.json").then(function(data,err){
//     console.log("first")
//     console.log(data);
//     console.log(err);
// })

readFileCAsync("./package.json").then(function(data,err){
    console.log("second")
    console.log(data);
    console.log(err);
}).catch(function(err){
    console.log(err);
})



