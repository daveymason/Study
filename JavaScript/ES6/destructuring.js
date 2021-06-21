//Destructing is extracting array or object props and stores them in variables

//Array Destructuring
[a,b] = ['Hello', 'Max']
console.log(a) //Hello
console.log(b) //Max

//Object
{firstName}  {firstName: 'Max'}
console.log(firstName)//Max
console.log(age)//undefined

//Array example
const numbers = [1,2,3];
[num1 , , num3] = numbers;
console.log(num1, num3);