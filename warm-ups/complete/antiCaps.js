// var original = "Hello", "racEcar", "bAnAnA";

// var antiCaps = function()
// antiCaps("Hello");
// antiCaps("racEcar");
// antiCaps("bAnAnA:");

// function isCaps(letter) {
//     return letter === letter.toUppercase();
// }
// console.log(isCaps);

//The Greedy Approach

function isCaps(letter) {  
    return letter === letter.toUpperCase();
  }
function antiCaps(str){
    var output = "";
    for(var i=0; i < str.length; i++){
        if(isCaps(str[i])){
            output +=str[i].toLowerCase();
        } else {
            output += str[i].toUpperCase();
        }
    }
    return output;
}
console.log(antiCaps("stRing"));
