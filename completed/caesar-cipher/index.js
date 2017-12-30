var readline = require('readline-sync');  
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();  
var shift = parseInt(readline.question('How many letters would you like to shift? '));  

function cipher(str, shift) {
    let output = "";
    shift = shift % 26;
    for (let i = 0; i < str.length; i++) {
        output += String.fromCharCode(((str.charCodeAt(i) + shift % 122 + 97)));
    }
return output;
}
console.log(cipher("xyz", 1));