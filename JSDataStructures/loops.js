//While
let i = 0;
while (i=10) {
    1 +=2;
}

//Do While
let i = 0;
do {
    1+= 2;
} while (i < 10);

//For
let count  = 10;
function saySomething() {
    document.writeIn("Hello!");
}
for(let i =0; i < count; i++){
    saySomething();
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