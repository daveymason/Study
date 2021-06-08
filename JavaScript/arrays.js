//Array Constructor
let colors = new Array(20);

//Array literal notation
let colors =["red", "blue", "green"];

//Arrays can have multiple data types. The most baic method of storing data. Above is a single dimensional array. 
let yourArray = ['one', 2, 'three', false, 42];
//Show value in an array 
alert(yourArray[0]);  //Will output 'one'
//array.length() to show how many values in array
console.log(yourArray.length);

//There are also mutli-dimensial arrays that can store arrasy within arrays.
let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

//Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];

myArray[1] = "Not B";

console.log(myArray);

//Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  arr.push(7, 'VIII', 9);
  arr.unshift('I', 2, 'three');
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//Shift and pop
//Diference is that neither method takes parameters, 
//and each only allows an array to be modified by a single element at a time.
function popShift(arr) {
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));

//Stack behaviours push() and pop()
let colors = new Array(); // create an array
let count = colors.push("red", "green"); // push 2 items
console.log(count); // 2

count = colors.push("black"); //push 1 more item on
console.log(count); //3

let item = colors.pop(); // gets the last item
console.log(item); //"black"
console.log(colors.length); // 2 (red & green because black was popped)

//Queue methods shift() and push()
//Push will add items to the end of the queue
let colors = new Array(); // create an array
let count = colors.push("red", "green"); // push 2 items
console.log(count); // 2

count = colors.push("black"); //push 1 more item on
console.log(count); //3

//shift will take items from the front of the queue.
let item = colors.shift(); //gets the first item
console.log(item); //"red"
console.log(colors.length); // 2 (green and black because red was shifted)

//Unshift() will add a new item to the front of the queue and return the new array length
let colors = new Array(); // create an array
let count = colors.unshift("red", "green"); // push 2 items
console.log(count); // 2

count = colors.unshift("black"); //push 1 more item on
console.log(count); //3 (array is [black,red,green])

let item = colors.pop(); // gets the last item and removes it from array
console.log(item); //"green"
console.log(colors.length); // 2   

//Splice can remove any number of consecutive elements from anywhere in an array.
//Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];

arr.splice(3, 4);
arr.splice(0, 1);

console.log(arr);

//splice() can also add to an array with a third paramater within it's brackets
//Remove the first two entries in the array and add DarkSalomn and BlanchedAlmond
function htmlColorNames(arr) {
arr.splice(0,2,'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

//slice() can copy or extract part of an array but does not change the array
let array1 = [1,2,3,4];
array1.slice(2,4); 
alert(array1); //will return 1,2,3,4

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

//The function is supposed to return a new array made up of num copies of arr.
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);  //Initialise new variable with spread operator. Add new variable to the newArr for every iteration of the while loop.
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//Combine arrays with a spread operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence =[ 'learning', ...fragment, 'is', 'fun']; //adds fragment arry in that location
  return sentence;
}

console.log(spreadOut()); //learning to code is fun

//indexOf - Check for the existence of an element within an array
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//Return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
  let newArr = [];
   for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

//Multi Dimensional 
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  [["deep"],'concat', false, true, 'spread', 'array'],
  [[["deeper"]],'mutate', 1327.98, 'splice', 'slice', 'push'],
  [[[["deepest"]]],'iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
];

//forEach
const months = ['January', 'February', 'March', 'April'];

months.forEach(function(month) {
  console.log(month);
});

/* output

January
February
March
April

*/

//Same thing but with a foor loop
for(let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

//practice
const pokemon = ['pikachu', 'charmander', 'squirtle', 'gengar' ];

pokemon.forEach(function(pokemonList){
  console.log(pokemonList);
});

//Map
const months = ['January', 'February', 'March', 'April'];
const transformedArray = months.map(function (month) {
  return month.toUpperCase();
});

console.log(transformedArray); 
// ["JANUARY", "FEBRUARY", "MARCH", "APRIL"]

//Practice and relearing

//Push
var myArray = [["John", 23], ["cat", 2]];
myArray.push(['dog',3]);
//Adds a new array of [dog,3]

//Pop
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
//Removes ['cat',2]


//Shift
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
//Removes ['John',23]

//Unshift
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

//Shift, Unshift, IndexOf
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
groceryList.unshift('popcorn');
console.log(groceryList.slice(1,4)); //From 3 - 5
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

//Arays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept);

//Advanced Methods

//iterate through this array and, for example, double each number. #

const arr1 = [5, 21, 8, 100];

//for
for (let i=0; i < arr1.length; i++) {
  arr2[i] = arr1 * 2;
}
console.log(arr2);

//forEach
const arr3 = [];
arr1.forEach((n,i) => {arr3[i] = n*2; });
console.log(arr3);

const arr4 = arr1.map(n=> n * 2);
console.log(arr4);



