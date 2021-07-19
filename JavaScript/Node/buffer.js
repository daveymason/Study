// Allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, 'b');


// Create buffer1 with 'hello' and buffer2 with 'world'
const buffer1 = Buffer.from('hello'); // Output: [104, 101, 108, 108, 111]
const buffer2 = Buffer.from('world'); // Output:[119, 111, 114, 108, 100]
const bufferArray = [buffer1, buffer2];


  
// Combine buffer1 and buffer2
const bufferConcat = Buffer.concat(bufferArray);


// Translate buffer to string
let bufferString = bufferArray.toString();


console.log(bufferAlloc);
console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
console.log(bufferConcat);
console.log(bufferString);