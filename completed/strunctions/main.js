//STRING METHODS (STRUNCTIONS)

// .concat()
// .indexOf()
// .lastIndexOf()
// .match()
// .replace()
// .slice()
// .split()
// .toLowerCase()
// .toUpperCase()
// .substr()

// .concat()
// combines the text of one or more strings and returns a new string
var str = 'hello ';  
var str2 = 'world';  
var fullStr = str.concat(str2);  
console.log(fullStr); // prints 'hello world'  


//  .indexOf()
// returns the index of the specified value, or -1 if not found
var str = 'hello world';  
var oIndex = str.indexOf('o');  
console.log(oIndex); //prints 4  

// or you can specify which instance of the specified value you want

var str = 'hello world';  
var oIndex = str.indexOf('o', 5); //finds first index of 'o' starting at the index 5  
console.log(oIndex); //prints 7  

//  .lastIndexOf()
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.
var str = "Hello planet earth, you are a great planet.";
var n = str.lastIndexOf("planet");
//should be:  36
console.log(n);

// .match()
// The match() method searches a string for a match against a regular expression, and 
// returns the matches, as an Array object.
var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);
//should be:  ain,ain,ain
console.log(res);

// .replace()
// The replace() method searches a string for a specified value, 
// or a regular expression, and returns a new string where the specified values are replaced.
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");
//should be:  Visit W3 Schools!
console.log(res);

// .slice()
// The slice() method extracts parts of a string and returns the extracted parts in a new string.
var str = 'hello world';  
var newStr = str.slice(6);  
console.log(newStr); // prints 'world'  

// or you can grab just a middle section
var str = 'heyyoudude';  
var newStr = str.slice(3,6);  
console.log(newStr); // prints 'you'  

// or you can go from the back
var str = 'hello world';  
var newStr = str.slice(-5);  
console.log(newStr); // prints 'world'

// .split()
// The split() method is used to split a string into an array of substrings, and returns the new array.
var str = "How are you doing today?";
var res = str.split(" ");
// The result of res will be an array with the values:
console.log(res);
How,are,you,doing,today?

// OR

// splits a string into an array of strings by separating the string into substrings

var str = 'hello I am john, I am a real human being';  
var words = str.split(' '); // splits by every space  
var lines = str.split(','); // splits by every ,  
var allChar = str.split(''); // splits by every character

console.log(words);//prints[ 'hello', 'I', 'am', 'john,', 'I', 'am', 'real' ]  
console.log(lines);//prints[ 'hello I am john', ' I am real' ]  
console.log(allChar);//prints[ 'h','e','l','l','o',' ','I',' ','a','m',' 

// .toLowerCase()
// The toLowerCase() method converts a string to lowercase letters.
// Note: The toLowerCase() method does not change the original string.
// Tip: Use the toUpperCase() method to convert a string to uppercase letters.

var str = 'HelLo WorlD';  
var lowStr = str.toLowerCase();  
console.log(lowStr); // prints 'hello world'  

//.toUpperCase()
var str = 'HelLo WorlD';  
var upStr = str.toUpperCase();  
console.log(upStr); // prints 'hello world' 

// .substr()
// The substr() method extracts parts of a string, beginning at 
// the character at the specified position, and returns the 
// specified number of characters.
var str = "Hello world!";
var res = str.substr(1, 4);
//should be ello
console.log(res);



