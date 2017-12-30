function formAlert() {


    // var form = document.getElementById("airlineForm");
    // var submit = document.getElementById("submit");
    // var travelLocation = document.getElementById("travelLocation");

    var form = document.getElementById("airlineForm'")

    var firstName = form.firstName.value; 
    var lastName = form.lastName.value;
    var age = form.age.value;
    var gender = form.gender.value;
    var location = form.travelLocation.value;
    var diet = "";

    if (form.vegan) {
        diet = document.getElementById("vegan").value;
    }

    if (form.gluten-free) {
        diet = document.getElementById("gluten-free").value;
    }

    if (form.paleo) {
        diet = document.getElementById("paleo").value;
    }

    formAlert("First Name: " + firstName + "\nLast Name: " + lastName +
    "\nAge: " + age + "\nGender: " + gender +
    "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..")

// formAlert =
//         `First Name: ${firstName}
//         Last Name: ${lastName}
//         Age: ${age}
//         Gender: ${gender}
//         Destination: ${travelLocation}
//         Dietary Restrictions: ${txt}`
//         alert(formAlert);
    
    document.getElementById("button").addEventListener("click", function()

}

formAlert();

console.log(formAlert());
