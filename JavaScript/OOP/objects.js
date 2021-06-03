//basic object
let dog = {
    name: "Boo Boo",
    numLegs: 8,
//Create a Method on an Object
    sayLegs: () => {return `This dog has ${dog.numLegs} legs.`;}, 
    sayLegs : function() {return "This dog has " + this.numLegs + " legs.";} //use the "this" keyword
};

//Use dot notation to print object properties to console
  console.log(dog.name, dog.numLegs);

  dog.sayName(); // Output the sayName method
  dog.sayLegs(); // Output the sayLegs method