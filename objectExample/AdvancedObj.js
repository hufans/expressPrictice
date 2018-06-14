/**
 * Example 1;
 */
//string test
String.prototype.sort = function(){ //扩展原型方法
    return this.big()
}

var str = new String("hah");
// console.log(str.sort());


/**
 * Example 2;
 */
//----------------------------------
//vehicle Parent
function Vehicle(wheels, engine) {
    this.wheels = wheels;
    this.engine = engine;
}

var testVehicle = new Vehicle(4,1); 
Vehicle.prototype.color = "red";
// console.log(testVehicle.color);//原型对象的 prototype属性会被对象捕获到。

//继承 bike
var Bicycle = Object.create(testVehicle, {  //继承属性之后 会在 __proto_ 中存在先前的对象属性，如果自身的 属性没有找到， 就会继续去 __proto_ 递归查找
    "pedals" :{value: true}
});

// console.log(Bicycle.pedals); 
// console.log(Bicycle.color);
// console.log(Bicycle.wheels);


/**
 * Example 3;
 */
function Friend() {
    this.demeanor = "happy";
}

function Foe() {
    this.demeanor = "suspicious";
}

var friend = new Friend();
var foe = new Foe();

var player = new Object();
player.__proto__ = foe;

friend.ally = "Tom";

console.log(player.demeanor === "happy" );      // Returns false
console.log(player.demeanor === "suspicious");  // Returns true
console.log(player.ally === "Tom");             // Returns false
// Turn the foe to a friend.
player.__proto__ = friend;
console.log(player.demeanor === "happy");       // Returns true
console.log(player.demeanor === "suspicious");  // Returns false
console.log(player.ally === "Tom");             // Returns true
