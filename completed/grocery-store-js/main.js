var shopper = {  
    store: "grocery",
    storeName: "Walmart",
    location: "Lehi",
    department:  ["produce", "bakery", "dairy", "meat", "frozen"],
    groceryCart: ["cheese", "meat", "bananas", "milk", "bread", "ice cream"],
    pharmacy: true,
    hours: 24,
    callStoreName: function() {
            console.log(shopper.storeName + " in " + shopper.location + " is AWESOME");
        }
    }
shopper.callStoreName()



// var store = (shopper.storeName + "in" shopper.location "is AWESOME");
    
// console.log(store);


// var store = shopper.storeName + "in" shopper.location "is AWESOME";
    
// console.log(store);



// store = shopper.storeName + "in" shopper.location "is AWESOME";
    
// console.log(store);




// function() {
//     console.log(shopper.storeName "in" shopper.location "is AWESOME");
// }

    // function() {
    //     return shopper.storeName + shopper.location;
    // }
 