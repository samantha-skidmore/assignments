//Generate random password.
//Must include uppercase, lowercase, numeric, symbols.
//Need 1 argument
//Need an integer defining how long the password should be

//MINE...
// var chars = "0123456789!@#$%&*()^ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
// var string_length = 8;
// var randomstring = '';
// for (var i=0; i<string_length; i++) {
//     var rnum = Math.floor(Math.random() * chars.length);
//     randomstring += chars.substring(rnum,rnum+1);
// }
// console.log(randomstring);

//FROM BEN
// function genPassword(int){
//     let characters = "0123456789!@#$%&*^()ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
// }

function genPassword(int){
    var output = "";
    for(var i = 0; i < int; i++){
        output+= String.fromCharCode(Math.floor(Math.random() * 93) + 33)
    }
    return output
}
console.log(genPassword(7));
// console.log(string.fromCharCode());