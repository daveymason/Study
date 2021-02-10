//Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

//Using the Match Method
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 

//Note that the .match syntax is the "opposite" of the .test method you have been using thus far:
'string'.match(/regex/);
/regex/.test('string');


//Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;  //'g' flag extracts patern more than once. 'i' flag removes case sensitivity.
let result = twinkleStar.match(starRegex); 