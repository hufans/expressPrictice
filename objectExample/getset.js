var propName = "prop_42";

var obj = {
    value: 0,
    set [propName](v) {
        this.value = v;
    },
    get [propName]() {
        return this.value;
    }
}

console.log(obj.value);

obj.prop_42 = 777;
console.log(obj.value);
