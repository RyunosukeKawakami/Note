
function makeCounter(){
    let count = 0;
    return f;
    function f(){
        return ++count;
    }
}
let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

function makedivide(x){
    return function (y){
        return x / y;
    }
}

let divide = makedivide(5);
let divide2 = makedivide(3);

console.log(divide(10));
console.log(divide2(1));
