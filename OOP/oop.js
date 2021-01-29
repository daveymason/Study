//basic object
let dog = {
    name: "Max",
    numLegs: 4,
//Create a Method on an Object
    sayName: function() {return "The name of this dog is " + dog.name + ".";}, 
    sayLegs : function() {return "This dog has " + dog.numLegs + " legs.";}
};

//Use dot notation to print object properties to console
  console.log(dog.name, dog.numLegs);

  dog.sayName(); //output the sayName method
  dog.sayLegs(); // Output the sayLegs method