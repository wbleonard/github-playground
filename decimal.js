// function to overcome decimal math

function add_decimals(x,y){
    return Math.round((x + y) * 1e12) / 1e12
}

console.log(.01+.06)
//  prints 0.06999999999999999
var num = 2/41.882
var n = num.toFixed(2);
console.log(n)
// prints 0.05 
console.log(add_decimals(.01,.06))
//  prints 0.07
