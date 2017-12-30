let rs = require("readline-sync");

var firstName = rs.question("Hi. What is your name? ");

ornaments = ["Iron Key", "Angel", "Stuffed Santa", "Star", "Berries", "Pine Cone", "Stocking", "Nativity", "Wiseman", "Stable", "Snowman", "Wreath", "Nutcracker", "Lights", "Gingerbread Man", "Penguin", "Teddy Bear", "Blown Glass Race Car"]

rightOrnaments = ["Cluster of Gumdrops", "Pear", "Candy Cane", "Family Picture in a Frame", "Handmade Cookie Ornament" "Gold/Silver Beads"];

console.log("Merry Christmas " + firstName.toUpperCase() + "! \n \n" + "You have been invited to the home of Santa and Mrs. Claus.\nThey are hosting a beautiful celebration and you can't go without gifts for the hosts. \nYou must bring the perfect gifts in order to be allowed into the party.\nEveryone wants to attend but only people who bring specific gifts are allowed to enter. \nYour assignment is to bring an ornament for six of their Christmas Trees. \nYou will be given multiple choice answers to the questions to help you make the very best choices.\n \nRemember...you must choose wisely.  Good Luck -- Here we go...\n");

let inv = [];
let allowedInParty = true;

while(allowedInParty) {
    let userinput = rs.question("First question to begin your journey: \nUsing a number, what is the two digit date of Christmas? ");

    if(userinput.includes("25")) {
        console.log("NICE JOB!");
}   else {
        console.log("SERIOUSLY?\nYou don't deserve to attend a celebration with Santa Claus!\n--GOODBYE!");
}       {
        userinput = rs.question("What ornament should you choose to go on the Candy Tree?");
    //would like to take 3 items from the ornaments array and index 0 of rightOrnaments array to create a numbered list of those options similar to index = readlineSync.keyInSelect ??  
 
       if(userinput.includes("Cluster of Gumdrops")) {
            console.log("You Got It!");
        } else {
            console.log("Nope. Try Again.");
}  {       
        userinput = rs.question("What ornament should you choose to go on the Fruit Tree?");

   }   if(userinput.includes("Pear")) {
        console.log("That was an easy one.");
    }      else if {
        console.log("Nope. Try that one again.?");
}   
}