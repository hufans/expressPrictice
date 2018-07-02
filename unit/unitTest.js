
var utils = {};
utils.getString = function (num1,num2){
    return num1.toString() + num2.toString();
}
utils.add = function(num1,num2){
    return num1 + num2;
}
utils.put = function(arr){
    if ( arr.length < 2 && arr.isArray() ){
        return null;
    }
    return arr.shift();
}
var map = new Map();
// map.set('admin','hufan');
const tomorrow = (long = false) => {
    let t = new Date();
    t.setDate(t.getDate() + 1);
    const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(
      t.getDate()
    ).padStart(2, '0')}`;
    return !long ? ret : `${ret}T00:00:00`;
  };
console.log(tomorrow());
module.exports = utils;