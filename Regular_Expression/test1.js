// var str="028-333232337";
// var patt1 = /(\d{3}-)(\d{8})(\d*)/ ; //* 表示多个 {n}表示指定个数
// var s = str.match(patt1)
// console.log(s);

// var mail = "13388743674"
// var patt = /^1[3-9][0-9]{9}$/;
// var patt = /0?(13|14|15|17|18|19)[0-9]{9}/;
// var x = mail.match(patt);
// console.log(x);

// var mait = "sixix.a@qq.com"
// var patt = /[A-Za-z0-9.]+@[A-Za-z0-9.]+[a-z]+/
// var xs = mait.match(patt);
// console.log(xs);


// var re = "fan.hu@msn.com"
// var patt = /\w*./;
// // var s = re.replace("fan","xiaoming")
// var s = re.replace(patt,"xiaoming")
// console.log(s);

// var str = "fan.hu@msn.com"

var tel = "+8613151232213"
var patt = /^((\+86){0,1})(1[3-9]\d{9})$/;
var result = tel.match(patt);
console.log(result);