//Constructor
function Dog() {
    this.name = "Boo Boo";
    this.color = "Light Brown";
    this.numLegs = 8;
  }

  //Add properties through parameters
  function Dog(name, color){
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  
  //Create new instance of Dog
  let terrier = new Dog("Max", "Brown and White");


  //ES6 Variant with a class
  class Dog { 
    constructor() { 
       this.name = "Boo Boo";
       this.color = "Light Brown";
       this.numLegs = 8;
    } 
 }
 
 //Verify an Object's Constructor with instanceof
 let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird; //returns true

  

  //Own properties
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  for(let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  
  console.log(ownProps);