// var rs = require("readline-sync");
//Question 1:  Make one of the inputs all uppercase (hello" prints "HELLO")

// function isCaps(letter) {  
//     return letter === letter.toUpperCase();
//   }
// function antiCaps(str){
//     var output = "";
//     for(var i=0; i < str.length; i++){
//         if(isCaps(str[i])){
//             output +=str[i].toLowerCase();
//         } else {
//             output += str[i].toUpperCase();
//         }
//     }
//     return output;
// }
// console.log(antiCaps("hello"));

//Question 2:  Report back the number of characters in a given input

// var txt = "how long is this string?"
// var stringlength = txt.length;

// console.log(stringlength);

//#1

var rs = require("readline-sync");

var response = rs.question("What is your name?");

console.log(response.toUpperCase());

//#2

