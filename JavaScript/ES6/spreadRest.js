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