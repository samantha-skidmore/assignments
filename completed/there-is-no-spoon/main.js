//10 Objects

var laptop = {
 color: "silver",
 brand: "apple",
 price: 1500,
 doesItWork: true,
 describe: function() {
     return("I have a " + this.color + " laptop");
}
}
 console.log(laptop.describe()) 

// var lamp = {
//  color: "clear",
//  shade: true,
//  price: 20,
//  doesItWork: true,
//  describe: function() {
//     return("I have a " + this.color + " lamp and it cost me $" + this.price);
// }
// }
// console.log(lamp.describe()) 

// var dresser = {
//  color: "grey",
//  height: "tall",
//  drawers:  11,
//  doesItHavePulls: true,
//  describe: function() {
//     return("I have a " + this.color + " dresser");
// }
// }
// console.log(dresser.describe())

// var bed = {
//  size: 'queen',
//  boxspring: true,
//  mattress: "tempurpedic",
//  pillows: 4,
//  sheetColor: "yellow",
//  talk:  function() {
//      return("I have a " + this.size + " bed");
// }
// }

// var Array = {
//     push: function(){
//         pushes items to the array
//         return array.length
//     },
//     slice: function(){
//         var sliceditem = copies whatever
//         return sliceditem;
//     }
// }
// var bagOfAlmonds = 100;

// function getAlmondsFromBag (num){
//     var emptyBag = bagOfAlmonds - num;
//     return emptyBag;
// }
// var pocket = getAlmondsFromBag(5);

// bagOfAlmonds -= pocket;
// console.log(bagOfAlmonds);


// var animals = ['cat', 'cow', 'rat'];
// animals.push('parrot');
// var returnedItem = animals.slice(2,3);
// console.log(returnedItem);
// var returnedItem = animals.push("dogs");
// animals.push('mosquito');
// console.log(returnedItem);
// if (animals.length > returnedItem){
//     console.log("this is too long");
// }else {
//     console.log("Would you like to add another?")
// }
// // console.log(add);


//NOTICE THE SMALL DETAILS OF WHAT I MISSED and FIXED ABOVE TO FIX BELOW

// var television
//  brand: "sanyo"
//  size:  60
//  price: 400
//  doesItWork: true,

// var car ["toyota", "chevrolet", "honda", "kia"]
//  model: "camry"
//  doors: 4
//  color: "burgundy"
//  doesItWork: true,

// var samantha
//  hairColor: "Brown"
//  eyeColor: "Brown"
//  age: 47
//  student: true,

// var house
//  levels: 3
//  bedrooms: 4
//  bathrooms: 3.5
//  color: "grey"
//  windows: true,

// var bedding
//  size: "queen"
//  comforterOrQuilt: "quilt"
//  accentPillows: 3
//  shams: 2
//  dryCleanOnly: false,

// var pants ["jegging", "skinny", "boyfriend", "straight", "bootcut", "straight", "flare"]
//  brand: "vigoss"
//  color: "blue"
//  fabric: "denim"
//  size:  14
//  type: "bootcut",


// var bagOfAlmonds = 100;

// function getAlmondsFromBag (num){
//     var emptyBag = bagOfAlmonds - num;
//     return emptyBag;
// }
// var pocket = getAlmondsFromBag(5);

// bagOfAlmonds -= pocket;
// console.log(bagOfAlmonds);


// var population = 5000;

// function buryPeople (num){
//     var deadPeople = population - num;
//     return deadPeople;
// }
// var coffins = buryPeople(500);

// population -= coffins;
// console.log(population);


var pieSlices = 12;
//pieSlices is my Total
function eatPie (num){
    var pieEaten = pieSlices - num;
    return pieEaten;
}
    var pieLeft = eatPie (4);

    pieSlices -= pieLeft;
    console.log(pieSlices);
