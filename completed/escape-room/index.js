let rs = require("readline-sync");

let player = true;

while (player) {
    let answer = rs.question("Hi. Do you want to play a game? ");
    
    if (answer === "no") {
        console.log("Well, that was a short game  --  GOOD-BYE!");
        break;

    } else { 
        
            var firstName = rs.question("What is your name? ");
            console.log("Hi " + firstName.toUpperCase() + "!  Welcome to the game of 'The benTurner-A-TOR!'\n\nThis game is all about Ben. How well do you know your V School Instructor?");
    }
    let firstQuestion = rs.question("Let's Begin: \nUsing a number, How Old is Ben? ");
    if (firstQuestion === "29") {
    console.log("YES -- YOU'RE LEARNING!");
    } else {
    console.log("Nope.  GAME OVER--YOU LOST!"); 



        let questionDolphinPants = rs.question("What is the most commonly used object that Instructor Ben Turner uses in his instruction to your V School class? "); 
        if (questionDolphinPants === "dolphinpants") {
        console.log("YES -- YOU'RE LEARNING!");
        } else {
        console.log("Nope.  GAME OVER -- YOU LOST!"); }
            
            
//         // let questionHollaback = rs.question("What is Instructor Ben Turner's version of a Call Back Function? ");
//         // let (questionHollaback.toLowerCase === "hollaback") {
//         // console.log("YES -- YOU'RE LEARNING!");
//         // }
//         // let questionThis = ("On the 2nd Day of class Instructor Ben Turner said that he 'hated' that 'blank was called blank'.  What is blank? ");
//         // if (questionThis.toLowerCase === "this") {
//         // console.log("YES -- YOU'RE LEARNING!");
//         // }
//         // let questionOrnamentP = ("What letter of the alphabet should you never put in front of the word 'Ornament'? ");
//         // if (questionOrnamentP.toLowerCase === "p") {
//         // console.log("YES -- YOU'RE LEARNING!");
//         // }
//         // let questionDrink = ("What does Instructor Ben Turner drink all day, every day? ");
//         // if (questionDrink.toLowerCase === "coffee") {
//         // console.log("YES -- YOU'RE LEARNING!");
//         // }
//         // let questionChai = ("What is Instructor Ben Turners favorite 'documentation'?  Hint: It's a drink. ");
//         // if (questionChai.toLowerCase === "chai") {
//         // console.log("YES -- YOU'RE LEARNING!");
//         // }
//         // let questionExit.toLowerCase = ("Congratulations -- YOU LEARNED! \nType 'exit' to end the game");
//         // if (questionExit === "exit") {
//         // process.exit;



// }
// }

 function introFunction() {