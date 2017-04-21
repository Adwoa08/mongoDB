
var userInput = require("./get-user-input");

console.log("Your name is " + userInput.fName + " " + userInput.lName);


//add property notes

function Greetr() {  
    this.greeting = "Hello world!";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr(); 