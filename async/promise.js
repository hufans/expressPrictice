
var fs = require("fs");
function runAsync1() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            fs.readFile('./async.js', (err, data) => {
                if (err) throw err;
                console.log('1-执行完成');
                console.log("1date：时间" + new Date().getSeconds())
                resolve('1返回数据');
            });
        }, 1000);
    });
    return p;
}
function runAsync2() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('2-执行完成');
            console.log("2date:时间" + new Date().getSeconds())
            resolve('2返回数据');
        }, 1000);
    });
    return p;
}
function runAsync3() {
    var p = new Promise(function (resolve, reject) {
        //做一些异步操作
        setTimeout(function () {
            console.log('3-执行完成');
            console.log("3date：时间" + new Date().getSeconds())
            resolve('3返回数据');
        }, 1000);
    });
    return p;
}


//then
// runAsync1()
// .then(function(data){
//     console.log(data);
//     return runAsync2();
// })
// .then(function(data){
//     console.log(data);
//     return runAsync3();
// })
// .then(function(data){
//     console.log(data);
// });

//all
// Promise.all([runAsync1(), runAsync2(), runAsync3()])
//     .then(function (data) {
//         console.log(data);
//     })

//race
// Promise.race([runAsync1(), runAsync2(), runAsync3()])
//     .then(function (data) {
//         console.log(data);
//     })

//组合使用
runAsync1()
.then(function(data){
    Promise.all([runAsync2(), runAsync3()])
    .then(function(data){
        console.log(data);
    })
})