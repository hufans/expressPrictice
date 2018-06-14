var async = require("async")

async.waterfall(
    [
        function (callback) {
            setTimeout(function () {
                console.log('event A occurs')
                callback(null, 'B')   // 第一个参数是error，第二个参数是下一个任务的参数
            }, 3000)
        },
        function (arg1, callback) {
            // arg1 等于 B
            console.log('event ' + arg1 + ' occurs')
            callback(null, 'C')
        }
    ], function (err, result) {
        // result 等于 C
        console.log('event ' + result + ' occurs')
    }
)
console.log("event D occurs")
