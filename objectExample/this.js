//指向调用对象
//具体来说js 的this是谁调用指向谁。
function a(){
    var user = "user";
    console.log(this.user); //undefined
    console.log(this); //Window
}
//a();

// 指向调用对象
var o = {
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a); //12
        }
    }
}
o.b.fn();