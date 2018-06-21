var Promise = require("bluebird");

var func1 = function(){
    console.log("func1 start! ");
    console.log(new Date().getSeconds());
    var a = new Promise(function(resolve,reject) {
        setTimeout(() => {
            resolve("func1 success");
        }, 2000);
    })
    return a;
}

var sendPictures = function(finishCallBack){
    setTimeout(() => {
        console.log(new Date().getSeconds());
        finishCallBack(null,3)
    }, 3000);
}

var sendPicturesAsync = Promise.promisify(sendPictures);

func1()
.then(function (data1) {
    console.log(data1);
    console.log(new Date().getSeconds());
    return sendPicturesAsync();
})
.catch(function(err) {
    console.log(err);
})
.then(function(data2) {
    console.log("最后数据" + data2);
})
.catch(function(err) {
    console.log(err);
})

//混合使用promise 