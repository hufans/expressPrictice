var a = 11;
var count = 0;
while (a > 0){
    if ( a % 2 == 1){
        count++;
    } 
    a = a>>1;
}
console.log(count);