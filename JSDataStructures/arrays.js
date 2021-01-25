//Arrays can have multiple data types. The most baic method of storing data. Above is a single dimensional array. 
let yourArray = ['one', 2, 'three', false, 42]; 

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
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));