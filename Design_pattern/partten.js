var json = require("../package.json")
//代理设计模式
function Person() { }
Person.prototype.sayName = function () { console.log('michaelqin'); }
Person.prototype.sayAge = function () { console.log(30); }

function PersonProxy() {
    this.person = new Person();
    var that = this;
    this.callMethod = function (functionName) {
        console.log('before proxy:', functionName);
        that.person[functionName](); // 代理
        console.log('after proxy:', functionName);
    }
    this.callMethodt = function (functionName) {
        console.log('before proxy:', functionName);
        this.person[functionName](); // 代理
        console.log('after proxy:', functionName);
    }
}

PersonProxy.prototype.callMethods = function(funcName){
    console.log("P before",funcName);
    this.person[funcName]();
    console.log('P after proxy:',funcName);
}
var s = json.dependencies;
var pp = new PersonProxy();
pp.callMethodt('sayName'); // 代理调用Person的方法sayName()
pp.callMethodt('sayAge'); // 代理调用Person的方法sayAge()


//观察者设计模式
function Publisher() {
    this.listeners = [];
}
Publisher.prototype = {
    'addListener': function (listener) {
        this.listeners.push(listener);
    },

    'removeListener': function (listener) {
        delete this.listeners[listener];
    },

    'notify': function (obj) {
        for (var i = 0; i < this.listeners.length; i++) {
            var listener = this.listeners[i];
            if (typeof listener !== 'undefined') {
                listener.process(obj);
            }
        }
    }
}; // 发布者

function Subscriber() {

}
Subscriber.prototype = {
    'process': function (obj) {
        console.log(obj);
    }
};　// 订阅者


// var publisher = new Publisher();
// publisher.addListener(new Subscriber());
// publisher.addListener(new Subscriber());
// publisher.notify({ name: 'michaelqin', ageo: 30 }); // 发布一个对象到所有订阅者
// publisher.notify('2 subscribers will both perform process'); // 发布一个字符串到所有订阅者