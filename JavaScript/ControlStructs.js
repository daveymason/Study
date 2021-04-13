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