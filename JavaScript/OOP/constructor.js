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
 
 //Another example
 class Monster {
  constructor(type, color) {
      this.type = type;
      this.color = color;
      this.isScary = true;
  }
  roar() {
      console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
  }
}

//with Inheritance
class Dragon extends Monster {
  constructor(type, color, element) {
      super(type, color); //super allows us to pass properties that are inherited and be initialised
      this.element = element;
  }
  fly() {
      console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
  }
}

//create method
const dragon1 = new Dragon("dragon", "blue", "water");
dragon1.roar();
dragon1.isScary;
dragon1.fly();

//Another child class
class Werewolf extends Monster {
  constructor(type, color) {
      super(type, color);
  }
  howl() {
      console.log(`The ${this.type} howls loudly.`);
  }
}

//New Warewolf object
const werewolf1 = new Werewolf("werewolf", "gray");
werewolf1.roar();
werewolf1.isScary;
werewolf1.howl();

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

  //Prototype
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;   //adds numLegs =4 to all objects in the Dos constructor. 
  
  let beagle = new Dog("Snoopy");

  //NuCamp Assignment
  class Student{
    constructor(name, email, community){
      this.name = name;
      this.email = email;
      this.community = community;
    }
  }

  class Bootcamp{
    constructor(name, level, students = []){
      this.name = name;
      this.level= level;
      this.students = students;
    }
    registerStudent(student){
      let hasStudent = students.includes(this.email);
        hasStudent == true ? console.log("Student already registered") : 
          this.students.pop(this.email)
          console.log(`Registering ${this.email} to the bootcamp Web Dev Fundamentals`);
        return this.students;
    }
  }