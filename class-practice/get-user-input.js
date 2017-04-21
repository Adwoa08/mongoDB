var readline = require("readline-sync");

var fName = readline.question("what is your first name?");
var lName = readline.question("what is your last name?");
function fullName(middleName){
    return (fName + " " + middleName + " " + lName);
}


module.exports = {
    fName: fName,
    lName: lName
}

//Whenever you do more than one exports, the last exports will override all the exports. 


module.exports.wholeName = fullName; //this means fullName is now wholeName. It is just creating property names so it doesn't change anything.

module.exports.fName = first;
