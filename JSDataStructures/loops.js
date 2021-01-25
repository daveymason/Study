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