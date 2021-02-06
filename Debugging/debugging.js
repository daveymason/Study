//Basics of debugging in js

//Find the value of a varibale using console.log
let a = 5;
let b = 1;
a++;

let sumAB = a + b;
console.log(a);

//Using typeof to check the type of varibalelet seven = 7;
let three = "3";
console.log(seven + three);

console.log(typeof seven);
console.log(typeof three);

//Catch the single and double quote marks
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

//Double Equals sign
let x = 7;
let y = 9;
let result = "to come";

if(x == y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);

//Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();
  console.log(result);

  //Catch the indexing off by 1 error
  function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;

    for (let i = 0; i < len; i++) {

      console.log(firstFive[i]);
    }
  }
  
  countToFive();

  //All this code a way to terminate 
  function myFunc() {
    for (let i = 1; i <= 4; i += 2) { //changed from i!=4
      console.log("Still going!");
    }
  }