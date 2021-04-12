//While
let i = 0;
while (i=10) {
    1 +=2;
}

let count =0;
while(count<10){
    console.log(count);
    count++
}

//Do While
let i = 0;
do {
    1+= 2;
} while (i < 10);

let count = 0;
do{
    count++;
    console.log("count is "+ count);
}while(count<10);

//For
for(let i = 1; i <=100; i+=2){
    console.log(i);
}

//for(in)
let array1 = ['all', 'cows', 'are', 'big'];

for (let index in array1) {
    console.log(array1[index]);
}

//forEach
let array1 = ['all', 'cows', 'are', 'big']

array1.forEach(function (element, index){
    console.log(element);
});



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