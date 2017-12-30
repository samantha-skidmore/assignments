//PRELIMINARY

var message = "ben rocks"

if (5 > 3) {
   console.log(message);
}

var box = "horse";
    if (box.length === 5) {
        console.log("I'm a Horse")
    }

if ("cat" === "cat") {
    console.log("true");
} else {
    console.log("Not the same");
}

//BRONZE MEDAL

//#1 Worked on my own.

var person = {  
    name: "Bobby",
    age: 12
  }

if (person > 18) {
    console.log("Congrats...you can go in the movie"); 
} else {
        console.log("Sorry, no movie for you");
    }

//#1-1 Worked.  Eric helped.

if (person.name[0] === "B") {
        console.log("Congrats, you can go in the movie");
    } else {
        console.log("Sorry, no movie for you");
    }

//#1-2 Worked.  Eric helped.

    if (person.name[0] === "B" && person.age > 18) {
      console.log("Congrats, you can go in the movie");
  } else {
      console.log("Sorry, no movie for you");
  }
