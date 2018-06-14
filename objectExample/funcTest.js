
/**
 * @description apply
 * @param {option String} arg1 
 * @param {option String} arg2 
 */
function callMe(arg1, arg2){
    var s = "";

    for (i in callMe.arguments) {
        s += "arguments: " + callMe.arguments[i];
    }
    return s;
}

// console.log(callMe(1, 2));
// console.log(callMe.apply(3, [ 4, 5 ]));




/**
 *  Example for bind
 *  bind param to function Obj
 */
// Define the original function.
var checkNumericRange = function (value) {
    if (typeof value !== 'number')
        return false;
    else
        return value >= this.minimum && value <= this.maximum;
}

var range = { minimum: 10, maximum: 20 };
var boundCheckNumericRange = checkNumericRange.bind(range);
var result = boundCheckNumericRange (12);
// console.log(result);


/**
 * Example For Call
 */
function callMe(arg1, arg2){
    var s = "";
    s += "this value: " + this.toString();
    s += "\n";
    for (i in callMe.arguments) {
        s += "arguments: " + callMe.arguments[i];
        s += "\n";
    }
    return s;
}

console.log("Original function: \n");
console.log(callMe(1, 2));
console.log("Function called with call: \n");
console.log(callMe.call(3, 4, 5));