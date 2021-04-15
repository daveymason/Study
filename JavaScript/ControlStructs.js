//If statement
if (booking.days < 4) {
    nightlyPrice = 100;
  } else {
    nightlyPrice = 80;
  }

let sale = true;  
if (sale === true){
  console.log("Time to buy!");
}else {
    console.log('Time to wait for a sale.');
  }

//If statement with comparision operator
let hungerLevel = 7;
if(hungerLevel > 7){
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

//If statement wioth Logical Operators
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood=== 'sleepy' && tirednessLevel > 8){
  console.log('time to sleep');
}else{
  console.log('not bed time yet')
}

//Another Example
function orderMyLogic(val) {
  if (val < 10 && val >= 5) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(4);

//Multiple if else
function testSize(num) {
  // Only change code below this line
if (num < 5){
  return "Tiny"
}else if (num >=5 && num < 10){
  return "Small"
}else if(num >=10 && num < 15){
  return "Medium"
}else if(num >=15 && num < 20){
  return "Large"
}else if(num >=20 && num <= 25){
  return "Huge"
}

  return "Change Me";
  // Only change code above this line
}

testSize(7);

//Multiple Else if #2
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!')
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!')
} else {
  console.log('Invalid season.');
}
//Having values example
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

//Short-circuit evaluation
let tool = 'marker';  //if this is blank writingUtensil is 'pen'

let writingUtensil = tool || 'pen'; //sets default value of pen if tool is false

console.log(`The ${writingUtensil} is mightier than the sword.`);

//Ternary operator
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log ('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase ==='Love That!' ? console.log('I love that!') : console.log("I don't love that!");



//Switch
var x = 3;
switch (x) {
  case 1:
    document.write(x);
    break;
  case 2:
    document.write(x+2);
    break;
  default:
    document.write(x+5);
} //outputs 8

//For Loop
for (i=1; i<5; i++){
    document.write(i + "<br />");
} //Prints 1 - 5 with a new line

//While Loop
var x=1;
while (x <= 5){
    console.log(x);
    x++;
}

//Do While
var i=20;
do{
    document.write(i + "<br />");
    i++
}
while (i<=25); //Prints out 20-25
//Do loop always executes once even if the condition is false