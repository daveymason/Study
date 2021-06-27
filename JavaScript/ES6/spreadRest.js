//Spread
const newArray = [...oldArray,1,2]
const newObject ={...oldObject,newProp:5}

//Rest
function sortArgs(...args){
    return args.sort()
}

//Spread Example
const numbers = [1,2,3];
const newNumbers = [...numbers, 4,5];
console.log(newNumbers) //1,2,3,4,5

//With object
const person = {
    name: 'Max'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson) //age 28 name Max

//REST Example
const filter = (...args) => {
    return args.filter(el => element === 1);
}

console.log(filter(1,2,3));// 1 

//Computer Property names
const myProperty = "foo";
const myObject = {
    [myProperty]: "This is a test"
}
console.log(myObject); //"This is a test"

//Spread Practice with Arrays
const chinesePeople = ['Jun', 'Li', 'Ping'];
const irishPeople = ['Siobhain', 'Olan', 'Niamh']

const people = [...irishPeople, ...chinesePeople]

const moreIrishPeople = [...irishPeople, 'Taigh', 'Daithi', 'Fionnula'];

const donkeysB = [...moreIrishPoeple, 24, {myObject}, ...chinesePeople];

//Spread practice with Objects
const objOne = {color: 'blue', height: 12}
const objTwo = {material: 'platinum', width: 60}

const objCombined = {...objOne, ...objTwo}

//update object properties
const objOneUpdate = {...objOne, height: 50}