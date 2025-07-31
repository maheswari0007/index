// let num1 = document.getElementById("number1");
// let num2 = document.getElementById("number2");
// let operator = document.getElementById("operator");
let num1 = 10;
let num2 = 15;
let op = '+';
let result;
function calculate(operator) {
switch (operator) {
    case '+':result = num1 + num2;
        break;
    case '-':result = num1 - num2;
        break;
     case '*':result = num1 * num2;
        break;
    case '/': if(num1>0) {
                result = num1 / num2;
                }else{
                    console.log("cannot be divided by zero")
                }
        break;
    default: console.log("invalid operator");
        break;
}
console.log(result);
}
// document.getElementById("result").innerText = result;

calculate(op);