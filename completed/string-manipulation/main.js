//#1:  Make one of the inputs all uppercase.

var rs = require("readline-sync");

var response = rs.question("What is your name?");
console.log(response.toUpperCase());

//#2:  Report back the number of characters 
var text = "How long is this string?";
var str = text.length;
console.log(str);

// #3:  Concatenate (add) two separate strings together
var response = rs.question("How are you today?");
console.log(response);


//#4:  Given a long message (more than 20 letters), return only the last half of the message

if (response.length> 20) {
    console.log(response.slice(response.length / 2));
}

//#5:  Using the same long message (but without making the user type it in again), 
//have your program print it to the terminal for the user to read again, but allow
//the user to tell your program where to begin typing from (which index to start from)


var index = rs.question("Choose a number between 0 and 50? " + (response.length));
console.log(response.slice(index));




