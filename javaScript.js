var string1 = "testForJsObject";
console.log(string1.length);

// var obj1 = {};
// obj1.name = "obj1";

// var obj2 = new Object();
// obj2.name = "obj2";
// console.log(obj2.name);

// function animal(height){
//     this.height = height;
// }

// animal.prototype.printHeight=function(){
//     console.log(this.height);
// }


// function Dog(name){
//     this.name = name;
//     this.prototype = new animal(10)
// }
// Dog.prototype.eat = function(){
//     console.log(this.name + "eat");
// }


// var s = new Dog("wangwang ");
// s.eat();
// s.printHeight();


function Person(name, age) {
    this.name = name;
    var age = age;// 在实例中无法被调用
}
var p1 = new Person("Bob", 20);
// console.log(p1.age) // Person ->{name: "Bob"}  无法访问到age属性，这就叫被封（装）起来了。

function getMoney(){
    this.money = 15;
    function ishot(){
        function fine(){
            console.log(this.name)
        } 
        fine();
    }
    ishot()
}
getMoney();


