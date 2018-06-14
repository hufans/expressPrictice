//js 面向对象，原型

//对象创建

// var obj = new Object(); 
// obj.name = 'haha';
// obj.showName = function(){ 
//     console.log(obj.name);
// }
// obj.showName();

//---------
//构造模式创建 
//任何函数都可以成为构造函数，这取决于你调用函数的方式，当使用了New的方式调用就成了构造函数。

function _class(name) {
    this.name = name;
    this.getName = function () {
        console.log(this.name);
    }
    console.log(this);
}

// var obj = new _class("objName");
// obj.getName();

// _class("jsonwrl"); //普通调用。this 指向当前工作全局
// new _class("jsonwrl2"); //new 调用 this 指向当前class

// _class("json").getName() //getname undefined
// new _class("json").getName() //cout << json 

// var p1 = new _class("ad");
// var p2 = new _class("ap");
// if (p1.getName != p2.getName) { //when obj create this func will Consumption memory
//     console.log("memory *p not equal");
// }


// //原型模式
// function CreatePerson(name){ 
//     this.name = name;
//     // this._proto_.showName = function(){
//     //     console.log(this.name);
//     // }
//   }
//   CreatePerson.prototype.showName = function(){ 
//      console.log(this.name);
//   }
//   var a = {} //普通对象

//   var b = function b(){}; //函数对象
//   b.prototype.getBName=function(){
//     return "nameB";
//   }
//   var c = new b(); //实例对象

//   c.getBName();
//   var p1 =new CreatePerson('p1');
//   p1.showName();
//   var p2 = new CreatePerson('p2');
//   p2.showName();
//   console.log(p1.showName==p2.showName);//true


// js 继承---------

//父类
function Animal(name) {
    this.name = name || 'Animal';
    this.stay = "land";
    this.sleep = function () {
        console.log(this.name + ':正在睡觉！');
    }
}
// 父类的原型方法
// Animal.prototype.eat = function (food) {
//     console.log(this.name + '正在吃：' + food);
// };

// //子类
// function Cat() {

// }

// Cat.prototype = new Animal();
// Cat.prototype.name = 'cat';

// Cat.prototype.GetName = function(){
//     console.log(this.name);
// }

// // var animal1 = new Animal("动物爸爸");
// // animal1.sleep();
// // animal1.eat("东西");

// var cat1 = new Cat();
// console.log(cat1.name);
// cat1.eat("鱼");
// console.log(cat1.stay);
// cat1.GetName();


//混合继承
function Persion(name, age) {
    this.name = name;
    var age = age;
    this.getName = function () {
        return this.name;
    }
    this.getAge = function () {
        return age;
    }
}
// 父类的原型对象属性   
Persion.prototype = {
    id: 10,
    getAge: function () {
        return this.age;
    }
}

// 子类   
function Boy(name, age, sex) {
    Persion.call(this, name, age);
    this.sex = sex;
}
var b = new Boy('xiaoming', 27, '男');
var c = new Boy("hua", 23, "nan");
// console.log(b.name)//    
// console.log(b.id);
// console.log(b.getName());
// console.log(b.getAge());

function Animal() {
    // arguments
    this.spaces = "Animal";
    this.growup = function () {
        console.log("Stronger");
    }
}
Animal.prototype.run = function () {
    console.log(this.spaces + "run");
}
Animal.prototype.grow = function () {
    this.growup()
}



// delete Animal.prototype.constructor;
// delete Animal.prototype.__proto__;

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype = new Animal;
var mi = new Cat("mi", "black");

// mi.run();
// mi.growup();

var Chinese = {
    nation: '中国',
    earnMoney:function(){
        console.log("stay"+this.nation+"earnMoney");
    }
};
function object(o) {
    function F() { }
    F.prototype =  o;
    return new F();
}

var Doctor = object(Chinese);

Doctor.earnMoney();
console.log(Doctor.nation);

//-------------------

function Animal(){
    this.species = "动物";
}

function Cat(name,color){
　　Animal.apply(this, arguments);
　　this.name = name;
　　this.color = color;
}

var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物