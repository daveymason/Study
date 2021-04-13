//Output
document.write('Used only for testing');

//Output to console
console.log('Output to console');

//Variables
var studentName = 'Davey';

console.log('My name is' + studentName);
console.log(`Hi ${studentName}!` );

//Let
let changeMe = true;
changeMe = false;
console.log(changeMe);

//Let can be changed but const can't
const entree = 'Enchiladas';
console.log(entree);
entree = 'Tacos'  //Will throw an error

//Operators

// // The assignment operator
// =

// // Comparison operators
// === "equal", !== "different", > "greater than", < "less than"

// // Math operators
// + "plus", - "minus", * "multiply", / "divide"

var x = 10;

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:

levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

//Increment and Decrement Operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

//Data Types
var age = 18;
var name = "Davey";
var isUser = true;

//String Concatination
var favoriteAnimal = 'Dog';
console.log('My favorite animal:' + favoriteAnimal)

//String Interpolation
var myName = 'Davey';
var myCity = 'Eindhoven';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

//typeof
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

