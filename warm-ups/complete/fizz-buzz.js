// function fizzBuzz(n){
//     //do the things
//     //return an array with all the numbers

// }
// fizzBuzz(5) // return (1, 2, "fizz", 4, "buzz")

// var FizzBuzzBuilder = function() {
//     var fizzNumber = 3;
//     var buzzNumber = 5;
//     var length = 100;
    
//     var fizzBuzz = function(){
//       //fizzBuzz logic capturing the private variables in a closure
//     };
//     this.setFizzNumber = function(number) {
//         fizzNumber = number;
//         return this;
//     };
//     this.setBuzzNumber = function(number) {
//         buzzNumber = number; 
//         return this;
//     };
//     this.finalize = function() {
//       return fizzBuzz;
//     };
//   };
//   console.log(this.finalize);


//BEN GOING OVER THIS WARM-UP

function fizzBuzz(n){
  var output = [];
//add something to the array n times
for(var i = 1; i <= n; i++){
  if(i % 15 === 0){
    output.push(fizzbuzz")
  } else if(i % 3 ===0){
    output.push("fizz")
  } else if (i % 5 ===0){
    output.push("buzz")
  } else {
      output.push(String(i));
  }
}
  //     //do the things
//     //return an array with all the numbers
return output;
} 
console.log(fizzBuzz(100))  // return (1, 2, "fizz", 4, "buzz")

