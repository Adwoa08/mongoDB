var readlineSync = require("readline-sync");

var addition = require("./addition");

var subtraction = require("./subtraction").subtract;

var multiplication = require("./multiplication");

var division = require("./addition");

var exponent = require("./exponentiation");

var numOne = readlineSync.question("Type your first number ");

var operator = readlineSync.keyIn("add, subtract, multiply, divide, exponent", {
    limit: "+-*/^ "
});

var numTwo = readlineSync.question("Type your second number ");


if (operator === "+") {
    console.log(addition.add(numOne, numTwo));
} else if (operator === "-") {
    console.log(subtraction(numOne, numTwo));
}else if(operator === "*"){
    console.log(multiplication(numOne, numTwo));
}else if(operator === "/"){
    console.log(division(numOne, numTwo));
}else if(operator === "^"){
    console.log(exponent(numOne, numTwo));
}
