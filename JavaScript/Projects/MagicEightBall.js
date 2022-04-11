let userName = "Sharon";
let userQuestion = "Will I ever find the 'One'?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

userName.length > 1 ? 
  console.log('Hello, ' + userName + '!') : 
    console.log('Hello!');
console.log(userName + "'s Question: " + userQuestion )

if (randomNumber === 0) {
  console.log('It is possible albeit improbable');
} else if (randomNumber === 1) {
  console.log("I wouldn't bet on it");
} else if (randomNumber === 2) {
  console.log('Reply hazy try again');
} else if (randomNumber === 3) {
  console.log('Unlikely');
}else if (randomNumber === 4) {
  console.log('My sources say no');
}else if (randomNumber === 5) {
  console.log('Do not count on it');
}else if (randomNumber === 6) {
  console.log('Outlook not so good');
} else {
  console.log('Signs point to no');
}