var Promise = require("bluebird")
var fs = require("fs")
// console.log(Promise.promisify.toString())
var readFileAsync = Promise.promisify(fs.readFile);
// var readFileCAsync = Promise.promisify(fs.readFileSync); //同步函数没有回调所以 promise会一一直处于挂起状态。

// new Promise(function(resolve,reject){
//     console.log("promise execute");
//     resolve("hah")
// })
// readFileAsync("./package.json")
// .then(function(data){
//     console.log(data.toString())
// }).catch(err=>{
//     console.log(data)
// })

var func = function(){
    sendPictures(function(err,data){
        return data;
    })
}

var func1 = function(fn){
    sendPictures(function(err,data){
        fn(null,data)
    })
}

var sendPictures = function(finishCallBack){
    setTimeout(() => {
        finishCallBack(null,3)
    }, 3000);
}
var x = [];
if (x) {
    console.log(x)
}


// var fn = Promise.promisify(sendPictures); 
//promisify 自动捕获参数并且回调resolve，和reject ， 为then填入参数，并且在距离最近的catch捕获错误。
// 因为 不是 并发的函数没有回调，所以promise会一直处于挂起状态。
var fn = Promise.promisify(func1)
fn().then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
})



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


// readFileCAsync("./package.json").then(function(data,err){
//     console.log("second")
//     console.log(data);
//     console.log(err);
// }).catch(function(err){
//     console.log(err);
// })



