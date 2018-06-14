//rest
let x = function(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
}
// x(1,2,3,4,5,6);

function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        console.log('x in bar() = ' + x); // 'A'
    }
    console.log('x in foo() = ' + x); // 1
    bar();
}
// foo();

//parament test
//js 基本数据类型是 深拷贝，复杂类型是浅拷贝。
var arrayTest = [3,4,3,2,1,5];
var str = "happy";
function short(para){
    if (typeof(para) == Array){
        para.pop();
        console.log(arrayTest);
    }else if(true){
        para += "hah"
        console.log(str);
    }
};
// short(arrayTest);
// short(str);


// obj example

var xiaoming = {
    name:"xiaoming",
    getName:function(){
        this.name;
    }
};

// var fn = xiaoming.getName
// console.log(fn());

//block
(()=>{
    console.log("hah")
})();