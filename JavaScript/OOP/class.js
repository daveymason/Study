class Dog{
    constructor(name, numLegs){
        this.name= name;
        this.numLegs = numLegs;
    }
    bark(){
        console.log(`${this.name} barks at the bad squirrel`);
    }
}

const pet1 = new Dog("Max", 4);
pet1.bark();

//Inheritance
class Animal{
    isPet = true;
}
class Dog extends Animal{
    run() {
        console.log("The dog runs");
    }
}
const dog1 = new Dog();
if (dog1.isPet == true){
    console.log("Your pet is an animal")
}else{
    console.log("What is that thing?")
}

//Practice
class Human {
    constructor() {
        this.gender = 'male'; 
    }
}

class Person extends Human{
    constructor (){
        super();   //executes the parent options
        this.name='Max';
        this.gender='female';//Will output female from the console.log in constructor
    }
    printMyName(){
    Console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();


//ES7 NEWER SYNTAX
class Human {
        gender = 'male'; 
}

        printGender = () => {
            Console.log(this.gender);
        }

class Person extends Human{
        name='Max';
        gender='female';//Will output female from the console.log in constructor
    }
    printMyName = () => {
    Console.log(this.name);
    }

const person = new Person();
person.printMyName();
person.printGender();