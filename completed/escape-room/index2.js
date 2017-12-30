let rs = require("readline-sync");

// let userInput = "";
// let isAlive = true;
// let length = 0;
var player = "";
let gameOn = true;

while (gameOn) {
    let answer = rs.question("\nHi.  Do you want to play a game? ");
    if (answer === "no") {
        console.log("\nWell, that was a short game -- GOOD-BYE!");
        gameOn == false;
        break;
    }  else {
            var firstName = rs.question("\nWhat is your name? ");
            let player = firstName.toUpperCase();
        
            console.log("\nHi " + player +  "!  \n\nWelcome to the game of 'The benTurner-A-TOR!'\n\nThis game is all about Ben...How well do you know your V School Instructor? ");

            let firstQuestion = rs.question("\nSo...let's Begin: \n\nUsing a number, How Old is Ben? ");
            if (firstQuestion === "29") {
                console.log("YES -- YOU'RE LEARNING!");
            } else {
                console.log("Nope.  GAME OVER--YOU LOST!");
                gameOn == false;
                break;
            } 
            let questionDolphinPants = rs.question("\nWhat is the most commonly used object that Instructor Ben Turner uses in his instruction to your V School class? \n"); 
            if (questionDolphinPants.toLowerCase() === "dolphinpants") {
                console.log("\nYES -- YOU'RE LEARNING!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
            let questionHollaback = rs.question("\nWhat is Instructor Ben Turner's version of a Call Back Function? ");
            if (questionHollaback.toLowerCase() === "hollaback") {
                console.log("\nYES -- YOU'RE LEARNING!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
            let questionThis = rs.question("\nOn the 2nd Day of class, Instructor Ben Turner said that he 'hated' that 'blank was called blank'.  What is blank? ");
            if (questionThis.toLowerCase() === "this") {
                console.log("\nYES -- YOU'RE LEARNING!");
            } else {
                console.log("\nNope.  GAME OVER -- holla!"); 
                gameOn == false;
                break;
            }
                let questionOrnamentP = rs.question("\nWhat letter of the alphabet should you never put in front of the word 'Ornament'? ");
            if (questionOrnamentP.toLowerCase() === "p") {
                 console.log("\nYES -- YOU'RE LEARNING!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
                let questionDrink = rs.question("\nWhat does Instructor Ben Turner drink all day, every day? ");
            if (questionDrink.toLowerCase() === "coffee") {
                console.log("\nYES -- YOU'RE LEARNING!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
            let questionChai = rs.question("\nWhat is Instructor Ben Turners favorite 'documentation'?  Hint: It's a drink. ");
            if (questionChai.toLowerCase() === "chai") {
                console.log("\nYES -- YOU'RE LEARNING!");
            } else {
                console.log("\nNope.  GAME OVER -- YOU LOST!"); 
                gameOn == false;
                break;
            }
            let questionExit = rs.question("\nCongratulations -- YOU LEARNED! \nType 'exit' to end the game  ");
            if (questionExit === "exit") {
            break;
            }
    }
}


