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


const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  //Use destructuring assignment within the argument to the function half to send only max and min inside the function.
  const half = ({max, min}) => (max + min) / 2.0;

  //Practice
  const hotel = {
    id: 0,
    city: "Honolulu",
    name: "Hotel Honolulu"
};

//old way
const id= hotel.id;
const city = hotel.city;
const name = hotel.name;

//new way
const {id,city,name} = hotel;