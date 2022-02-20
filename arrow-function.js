//function decliariotion
function add(num1, num2) {
    return num1 + num2;
}
//function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}
//function expretion (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

const sum1 = add(13, 12);
const sum2 = add2(14, 12);
const sum3 = add3(15, 12);
console.log(sum1, sum2, sum3);