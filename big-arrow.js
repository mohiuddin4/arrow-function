const add = (num1, num2) => num1 + num2;
const sum = add(12, 45);

const multyply = (num1, num2, num3) => num1 * num2 * num3;
const result = multyply(12, 2, 2);

const tenTimes = (num) => num * 10;
const output = tenTimes(10);

const fivetime = num => num * 5;
const value = fivetime(5);

const getName = () => 'ashiki ob tomhiho';
const name = getName();

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const deff = num1 - num2;
    const devide = sum / deff;
    const multyply = sum * deff;
    const parsent = num1 % num2;
    const total = sum + deff + devide + multyply + parsent;
    return total;
}
const total = doMath(15, 10);
console.log(total);